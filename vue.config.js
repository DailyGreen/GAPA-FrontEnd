var path = require("path")

// vue.config.js
module.exports = {
	outputDir: path.resolve(__dirname, "../eon-backend/public/"),
    // options...
    devServer: {
        disableHostCheck: true,
		proxy: {
			'/api': {
				target: 'http://localhost:3000/api',
				changeOrigin: true,
				pathRewrite: {
					"^/api": ''
				}
			}
		}
    }
}