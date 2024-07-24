"use strict";(()=>{var e={};e.id=130,e.ids=[130],e.modules={7096:e=>{e.exports=require("bcrypt")},1790:e=>{e.exports=require("next/dist/compiled/next-server/app-page-experimental.runtime.prod.js")},1936:e=>{e.exports=require("next/dist/compiled/next-server/app-route-experimental.runtime.prod.js")},4300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},2361:e=>{e.exports=require("events")},7147:e=>{e.exports=require("fs")},3685:e=>{e.exports=require("http")},5687:e=>{e.exports=require("https")},1808:e=>{e.exports=require("net")},2037:e=>{e.exports=require("os")},1017:e=>{e.exports=require("path")},9955:e=>{e.exports=require("stream")},4404:e=>{e.exports=require("tls")},7310:e=>{e.exports=require("url")},9796:e=>{e.exports=require("zlib")},1293:(e,a,t)=>{t.a(e,async(e,r)=>{try{t.r(a),t.d(a,{patchFetch:()=>m,requestAsyncStorage:()=>c,routeModule:()=>d,serverHooks:()=>p,staticGenerationAsyncStorage:()=>l});var s=t(1872),i=t(6305),n=t(8694),u=t(3703),o=e([u]);u=(o.then?(await o)():o)[0];let d=new s.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/seed/route",pathname:"/seed",filename:"route",bundlePath:"app/seed/route"},resolvedPagePath:"/Users/gokul.krishna/Documents/gitprojects/nextjs-dashboard/app/seed/route.ts",nextConfigOutput:"",userland:u}),{requestAsyncStorage:c,staticGenerationAsyncStorage:l,serverHooks:p}=d;function m(){return(0,n.patchFetch)({staticGenerationAsyncStorage:l,requestAsyncStorage:c})}r()}catch(e){r(e)}})},7144:(e,a,t)=>{t.d(a,{Ef:()=>i,J6:()=>s,WH:()=>n,rC:()=>r});let r=[{id:"410544b2-4001-4271-9855-fec4b6a6442a",name:"User",email:"user@nextmail.com",password:"123456"}],s=[{id:"d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",name:"Evil Rabbit",email:"evil@rabbit.com",image_url:"/customers/evil-rabbit.png"},{id:"3958dc9e-712f-4377-85e9-fec4b6a6442a",name:"Delba de Oliveira",email:"delba@oliveira.com",image_url:"/customers/delba-de-oliveira.png"},{id:"3958dc9e-742f-4377-85e9-fec4b6a6442a",name:"Lee Robinson",email:"lee@robinson.com",image_url:"/customers/lee-robinson.png"},{id:"76d65c26-f784-44a2-ac19-586678f7c2f2",name:"Michael Novotny",email:"michael@novotny.com",image_url:"/customers/michael-novotny.png"},{id:"CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",name:"Amy Burns",email:"amy@burns.com",image_url:"/customers/amy-burns.png"},{id:"13D07535-C59E-4157-A011-F8D2EF4E0CBB",name:"Balazs Orban",email:"balazs@orban.com",image_url:"/customers/balazs-orban.png"}],i=[{customer_id:s[0].id,amount:15795,status:"pending",date:"2022-12-06"},{customer_id:s[1].id,amount:20348,status:"pending",date:"2022-11-14"},{customer_id:s[4].id,amount:3040,status:"paid",date:"2022-10-29"},{customer_id:s[3].id,amount:44800,status:"paid",date:"2023-09-10"},{customer_id:s[5].id,amount:34577,status:"pending",date:"2023-08-05"},{customer_id:s[2].id,amount:54246,status:"pending",date:"2023-07-16"},{customer_id:s[0].id,amount:666,status:"pending",date:"2023-06-27"},{customer_id:s[3].id,amount:32545,status:"paid",date:"2023-06-09"},{customer_id:s[4].id,amount:1250,status:"paid",date:"2023-06-17"},{customer_id:s[5].id,amount:8546,status:"paid",date:"2023-06-07"},{customer_id:s[1].id,amount:500,status:"paid",date:"2023-08-19"},{customer_id:s[5].id,amount:8945,status:"paid",date:"2023-06-03"},{customer_id:s[2].id,amount:1e3,status:"paid",date:"2022-06-05"}],n=[{month:"Jan",revenue:2e3},{month:"Feb",revenue:1800},{month:"Mar",revenue:2200},{month:"Apr",revenue:2500},{month:"May",revenue:2300},{month:"Jun",revenue:3200},{month:"Jul",revenue:3500},{month:"Aug",revenue:3700},{month:"Sep",revenue:2500},{month:"Oct",revenue:2800},{month:"Nov",revenue:3e3},{month:"Dec",revenue:4800}]},3703:(e,a,t)=>{t.a(e,async(e,r)=>{try{t.r(a),t.d(a,{GET:()=>l});var s=t(7096),i=t.n(s),n=t(5141),u=t(7144);let e=await n.db.connect();async function o(){return await e.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`,await e.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `,await Promise.all(u.rC.map(async a=>{let t=await i().hash(a.password,10);return e.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${a.id}, ${a.name}, ${a.email}, ${t})
        ON CONFLICT (id) DO NOTHING;
      `}))}async function m(){return await e.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`,await e.sql`
    CREATE TABLE IF NOT EXISTS invoices (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL
    );
  `,await Promise.all(u.Ef.map(a=>e.sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${a.customer_id}, ${a.amount}, ${a.status}, ${a.date})
        ON CONFLICT (id) DO NOTHING;
      `))}async function d(){return await e.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`,await e.sql`
    CREATE TABLE IF NOT EXISTS customers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `,await Promise.all(u.J6.map(a=>e.sql`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${a.id}, ${a.name}, ${a.email}, ${a.image_url})
        ON CONFLICT (id) DO NOTHING;
      `))}async function c(){return await e.sql`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    );
  `,await Promise.all(u.WH.map(a=>e.sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${a.month}, ${a.revenue})
        ON CONFLICT (month) DO NOTHING;
      `))}async function l(){try{return await e.sql`BEGIN`,await o(),await d(),await m(),await c(),await e.sql`COMMIT`,Response.json({message:"Database seeded successfully"})}catch(a){return await e.sql`ROLLBACK`,Response.json({error:a},{status:500})}}r()}catch(e){r(e)}},1)},1872:(e,a,t)=>{e.exports=t(1936)}};var a=require("../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),r=a.X(0,[214,141],()=>t(1293));module.exports=r})();