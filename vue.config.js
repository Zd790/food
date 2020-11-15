//根目录建立文件 vue.config.js
module.exports = { 
	devServer: {
		proxy: {
			'/api': {
			target: 'https://api.binstd.com/recipe',
			changeOrigin: true, //允许跨域
			pathRewrite:{  //路径重写
					'^/api':''
				},
			},
		},
	},
}
