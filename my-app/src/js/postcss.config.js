import autoprefixer from 'autoprefixer'
import { plugin } from 'postcss'
import sortMediaQueries from 'postcss-sort-media-queries'

export default {
    plugins: [autoprefixer(), sortMediaQueries()]
}