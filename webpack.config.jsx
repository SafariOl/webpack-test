import path from 'path';
import buildWebpack from './build/buildWebpack';

export default (env) => {
    const paths = {
        entry: path.resolve(__dirname, 'src', 'index.jsx'),
        output: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }
    const config = buildWebpack({
        mode: env.mode ?? 'development', 
        platform: env.platform ?? 'desktop',
        port: env.port ?? 3000,
        paths
    })
    return config
}