import {marked} from 'marked'
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import '@/lib/css/editor-v3.style.css'

export async function  transformMarkdown(markdownString:string) {
    return  new Promise((resolve, reject)=>{
        // marked 全局变量
        marked.setOptions({
            // 设置代码高亮插件
            highlight: function(code:string, lang:string, callback:any) {
                let result = ''
                result = Prism.highlight(code, Prism.languages.javascript, "javascript")
                callback("", result.toString());
            }
        });
          marked.parse(markdownString, (err:string, html:string) => {
              if(err){
                  reject(err.toString())
              }else {
                  resolve(html.toString())
              }

        });
    })
}