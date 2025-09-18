// 函数实例日志
console.log('[log] func initialization started.')

exports.main = function(event, context) {
  console.log('[log] this is a log in main function')

  for (let i = 0; i < 200; i++) {
    console.log(`[log] this-is-a-log-in-main-function-index-${i}`)
  }

  console.log('[log] this is a log in main function')

  for (let i = 200; i < 500; i++) {
    console.log(`[log] this-is-a-log-in-main-function-index-${i}`)
  }

  process.nextTick(() => {
    for (let i = 0; i < 300; i++) {
      console.log(`[log] this-is-a-async-log-in-main-function-print-after-return-${i}`)
    }
  })

  return 'done'
}

// 函数实例日志
console.log('func initialization finish.')
