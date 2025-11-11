/**
 * 购物车工具类
 * 使用本地存储管理购物车数据
 */

const CART_KEY = "mp_shop_cart"
let cartIdCounter = 1

/**
 * 获取购物车数据
 */
function getCart() {
  try {
    const cart = wx.getStorageSync(CART_KEY)
    return cart || []
  } catch (e) {
    console.error("获取购物车失败", e)
    return []
  }
}

/**
 * 保存购物车数据
 */
function saveCart(cart) {
  try {
    wx.setStorageSync(CART_KEY, cart)
    return true
  } catch (e) {
    console.error("保存购物车失败", e)
    return false
  }
}

/**
 * 添加商品到购物车
 */
function addToCart(goods) {
  const cart = getCart()
  
  // 获取当前最大ID
  if (cart.length > 0) {
    const maxId = Math.max(...cart.map(item => item.id))
    cartIdCounter = maxId + 1
  }
  
  const cartItem = {
    id: cartIdCounter++,
    title: goods.title,
    image: goods.image || goods.topimage,
    price: goods.price,
    currentID: goods.id || goods.currentID
  }
  
  cart.push(cartItem)
  saveCart(cart)
  return true
}

/**
 * 从购物车删除商品
 * @param {number} id - 购物车项的ID
 */
function removeFromCart(id) {
  const cart = getCart()
  const newCart = cart.filter(item => item.id !== id)
  saveCart(newCart)
  return true
}

/**
 * 根据商品ID删除（删除同一商品的所有项）
 * @param {number} currentID - 商品的currentID
 */
function removeByGoodsId(currentID) {
  const cart = getCart()
  const newCart = cart.filter(item => item.currentID !== currentID)
  saveCart(newCart)
  return true
}

/**
 * 清空购物车
 */
function clearCart() {
  try {
    wx.removeStorageSync(CART_KEY)
    cartIdCounter = 1
    return true
  } catch (e) {
    console.error("清空购物车失败", e)
    return false
  }
}

/**
 * 获取购物车商品数量
 */
function getCartCount() {
  return getCart().length
}

module.exports = {
  getCart,
  addToCart,
  removeFromCart,
  removeByGoodsId,
  clearCart,
  getCartCount
}

