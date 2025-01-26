"use strict";(()=>{var e={};e.id=362,e.ids=[362],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,a){return a in t?t[a]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,a)):"function"==typeof t&&"default"===a?t:void 0}}})},670:(e,t,a)=>{a.r(t),a.d(t,{config:()=>s,default:()=>p,routeModule:()=>r});var n={};a.r(n),a.d(n,{default:()=>c});var i=a(802),o=a(153),_=a(249);let d=JSON.parse('{"universities":[{"id":1,"name_en":"Tohoku University","name_jp":"東北大学","name_cn":"东北大学","website":"https://www.tohoku.ac.jp/japanese/","type":"国立","location":"宮城県","created_at":"2024-12-20 07:14:30","official_id":10,"need_to_update":0},{"id":2,"name_en":"The University of Tokyo","name_jp":"東京大学","name_cn":"东京大学","website":"http://www.u-tokyo.ac.jp/","type":"国立","location":"東京都","created_at":"2024-12-21 01:14:30","official_id":22,"need_to_update":0},{"id":3,"name_en":"Osaka University","name_jp":"大阪大学","name_cn":"大阪大学","website":"https://www.osaka-u.ac.jp/","type":"国立","location":"大阪府","created_at":"2024-12-20 07:14:30","official_id":55,"need_to_update":0},{"id":4,"name_en":"Tokyo Institute of Technology","name_jp":"東京工業大学","name_cn":"东京工业大学","website":"https://www.titech.ac.jp/","type":"国立","location":"東京都","created_at":"2024-12-20 07:14:30","official_id":28,"need_to_update":0},{"id":5,"name_en":"Kyoto University","name_jp":"京都大学","name_cn":"京都大学","website":"https://www.kyoto-u.ac.jp/ja","type":"国立","location":"京都府","created_at":"2024-12-20 07:14:30","official_id":52,"need_to_update":0},{"id":6,"name_en":"Kyushu University","name_jp":"九州大学","name_cn":"九州大学","website":"https://www.kyushu-u.ac.jp/","type":"国立","location":"福岡県","created_at":"2024-12-20 07:14:30","official_id":73,"need_to_update":0},{"id":7,"name_en":"Hokkaido University","name_jp":"北海道大学","name_cn":"北海道大学","website":"https://www.hokudai.ac.jp/","type":"国立","location":"北海道","created_at":"2024-12-20 07:14:30","official_id":1,"need_to_update":0},{"id":8,"name_en":"Nagoya University","name_jp":"名古屋大学","name_cn":"名古屋大学","website":"https://www.nagoya-u.ac.jp/","type":"国立","location":"愛知県","created_at":"2024-12-20 07:14:30","official_id":45,"need_to_update":0},{"id":9,"name_en":"University of Tsukuba","name_jp":"筑波大学","name_cn":"筑波大学","website":"https://www.tsukuba.ac.jp/","type":"国立","location":"茨城県","created_at":"2024-12-20 07:14:30","official_id":16,"need_to_update":0},{"id":10,"name_en":"International Christian University","name_jp":"国際基督教大学","name_cn":"国际基督教大学","website":"https://www.icu.ac.jp/","type":"私立","location":"東京都","created_at":"2024-12-20 07:14:30","official_id":459,"need_to_update":0},{"id":11,"name_en":"Hiroshima University","name_jp":"広島大学","name_cn":"广岛大学","website":"https://www.hiroshima-u.ac.jp/","type":"国立","location":"広島県","created_at":"2024-12-20 07:14:30","official_id":65,"need_to_update":0},{"id":12,"name_en":"Keio University","name_jp":"慶應義塾大学","name_cn":"庆应义塾大学","website":"https://www.keio.ac.jp/ja/","type":"私立","location":"東京都","created_at":"2024-12-20 07:14:30","official_id":386,"need_to_update":0},{"id":13,"name_en":"Kobe University","name_jp":"神戸大学","name_cn":"神户大学","website":"https://www.kobe-u.ac.jp/ja/","type":"国立","location":"兵庫県","created_at":"2024-12-20 07:14:30","official_id":58,"need_to_update":0},{"id":14,"name_en":"Waseda University","name_jp":"早稲田大学","name_cn":"早稻田大学","website":"https://www.waseda.jp/","type":"私立","location":"東京都","created_at":"2024-12-20 16:14:30","official_id":446,"need_to_update":0},{"id":15,"name_en":"Akita International University","name_jp":"国際教養大学","name_cn":"秋田国际教养大学","website":"https://web.aiu.ac.jp/","type":"公立","location":"秋田県","created_at":"2024-12-20 07:14:30","official_id":151,"need_to_update":0},{"id":16,"name_en":"Hitotsubashi University","name_jp":"一橋大学","name_cn":"一桥大学","website":"https://www.hit-u.ac.jp/","type":"国立","location":"東京都","created_at":"2024-12-20 07:14:30","official_id":32,"need_to_update":0},{"id":17,"name_en":"Tokyo Medical and Dental University","name_jp":"東京医科歯科大学","name_cn":"东京医科齿科大学","website":"https://www.tmd.ac.jp/","type":"国立","location":"東京都","created_at":"2024-12-20 07:14:30","official_id":23,"need_to_update":0},{"id":18,"name_en":"Kanazawa University","name_jp":"金沢大学","name_cn":"金泽大学","website":"https://www.kanazawa-u.ac.jp/","type":"国立","location":"石川県","created_at":"2024-12-20 07:14:30","official_id":38,"need_to_update":0},{"id":19,"name_en":"Chiba University","name_jp":"千葉大学","name_cn":"千叶大学","website":"https://www.chiba-u.ac.jp/","type":"国立","location":"千葉県","created_at":"2024-12-20 07:14:30","official_id":21,"need_to_update":0},{"id":20,"name_en":"Tokyo University of Agriculture and Technology","name_jp":"東京農工大学","name_cn":"东京农工大学","website":"https://www.tuat.ac.jp/","type":"国立","location":"東京都","created_at":"2024-12-20 07:14:30","official_id":26,"need_to_update":0}]}');function c(e,t){if(t.setHeader("Access-Control-Allow-Origin","*"),t.setHeader("Access-Control-Allow-Methods","GET, OPTIONS"),t.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization"),t.setHeader("Access-Control-Max-Age","86400"),"OPTIONS"===e.method){t.status(200).end();return}"GET"===e.method?(t.setHeader("Cache-Control","public, max-age=3600"),t.status(200).json(d)):t.status(405).json({message:"Method not allowed"})}let p=(0,_.l)(n,"default"),s=(0,_.l)(n,"config"),r=new i.PagesAPIRouteModule({definition:{kind:o.x.PAGES_API,page:"/api/universities",pathname:"/api/universities",bundlePath:"",filename:""},userland:n})},153:(e,t)=>{var a;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return a}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(a||(a={}))},802:(e,t,a)=>{e.exports=a(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var a=t(t.s=670);module.exports=a})();