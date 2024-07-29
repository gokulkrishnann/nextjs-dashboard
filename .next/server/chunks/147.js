exports.id=147,exports.ids=[147],exports.modules={43193:(e,t,r)=>{Promise.resolve().then(r.bind(r,67041)),Promise.resolve().then(r.t.bind(r,46602,23))},4679:()=>{},72690:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,54504,23)),Promise.resolve().then(r.t.bind(r,14368,23)),Promise.resolve().then(r.t.bind(r,62721,23)),Promise.resolve().then(r.t.bind(r,71780,23)),Promise.resolve().then(r.t.bind(r,64108,23)),Promise.resolve().then(r.t.bind(r,62562,23))},67041:(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var s=r(57880),a=r(10703),o=r(69616),i=r(57465),n=r(34871),c=r(9082),l=r(43029);let d=[{name:"Home",href:"/dashboard",icon:a.Z},{name:"Invoices",href:"/dashboard/invoices",icon:o.Z},{name:"Customers",href:"/dashboard/customers",icon:i.Z}];function u(){let e=(0,c.usePathname)();return s.jsx(s.Fragment,{children:d.map(t=>{let r=t.icon;return(0,s.jsxs)(n.default,{href:t.href,className:(0,l.Z)("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",{"bg-sky-100 text-blue-600":e===t.href}),children:[s.jsx(r,{className:"w-6"}),s.jsx("p",{className:"hidden md:block",children:t.name})]},t.name)})})}},85002:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>n});var a=r(81299),o=r(30672),i=e([o]);function n({children:e}){return(0,a.jsxs)("div",{className:"flex h-screen flex-col md:flex-row md:overflow-hidden",children:[a.jsx("div",{className:"w-full flex-home md:w-64",children:a.jsx(o.default,{})}),a.jsx("div",{className:"flex-grow p-6 md:overflow-y-auto md:p-12",children:e})]})}o=(i.then?(await i)():i)[0],s()}catch(e){s(e)}})},35522:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n,metadata:()=>i});var s=r(81299);r(5245);var a=r(2307),o=r.n(a);let i={title:"Acme Dashboard",description:"The official Next.js Course Dashboard, built with App Router",metadataBase:new URL("https://next-learn-dashboard.vercel.sh")};function n({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:`${o().className} antialiased`,children:e})})}},59309:(e,t,r)=>{"use strict";r.d(t,{BX:()=>u,D1:()=>d,NI:()=>i,V_:()=>l,qu:()=>n,t2:()=>o,x4:()=>c});var s=r(5141),a=r(73049);async function o(){try{console.log("Fetching revenue data..."),await new Promise(e=>setTimeout(e,3e3));let e=await (0,s.i6)`SELECT * FROM revenue`;return console.log("Data fetch completed after 3 seconds."),e.rows}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch revenue data.")}}async function i(){try{return(await (0,s.i6)`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`).rows.map(e=>({...e,amount:(0,a.xG)(e.amount)}))}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch the latest invoices.")}}async function n(){try{let e=(0,s.i6)`SELECT COUNT(*) FROM invoices`,t=(0,s.i6)`SELECT COUNT(*) FROM customers`,r=(0,s.i6)`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`,o=await Promise.all([e,t,r]),i=Number(o[0].rows[0].count??"0"),n=Number(o[1].rows[0].count??"0"),c=(0,a.xG)(o[2].rows[0].paid??"0"),l=(0,a.xG)(o[2].rows[0].pending??"0");return{numberOfCustomers:n,numberOfInvoices:i,totalPaidInvoices:c,totalPendingInvoices:l}}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch card data.")}}async function c(e,t){try{return(await (0,s.i6)`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${e}%`} OR
        customers.email ILIKE ${`%${e}%`} OR
        invoices.amount::text ILIKE ${`%${e}%`} OR
        invoices.date::text ILIKE ${`%${e}%`} OR
        invoices.status ILIKE ${`%${e}%`}
      ORDER BY invoices.date DESC
      LIMIT ${6} OFFSET ${(t-1)*6}
    `).rows}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoices.")}}async function l(e){try{let t=await (0,s.i6)`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${e}%`} OR
      customers.email ILIKE ${`%${e}%`} OR
      invoices.amount::text ILIKE ${`%${e}%`} OR
      invoices.date::text ILIKE ${`%${e}%`} OR
      invoices.status ILIKE ${`%${e}%`}
  `;return Math.ceil(Number(t.rows[0].count)/6)}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch total number of invoices.")}}async function d(e){try{return(await (0,s.i6)`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${e};
    `).rows.map(e=>({...e,amount:e.amount/100}))[0]}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch invoice.")}}async function u(){try{return(await (0,s.i6)`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `).rows}catch(e){throw console.error("Database Error:",e),Error("Failed to fetch all customers.")}}},73049:(e,t,r)=>{"use strict";r.d(t,{p9:()=>a,tk:()=>o,xG:()=>s});let s=e=>(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"}),a=(e,t="en-US")=>{let r=new Date(e);return new Intl.DateTimeFormat(t,{day:"numeric",month:"short",year:"numeric"}).format(r)},o=e=>{let t=[],r=1e3*Math.ceil(Math.max(...e.map(e=>e.revenue))/1e3);for(let e=r;e>=0;e-=1e3)t.push(`$${e/1e3}K`);return{yAxisLabels:t,topLabel:r}}},30264:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(81299),a=r(5494),o=r(12676),i=r.n(o);function n(){return(0,s.jsxs)("div",{className:`${i().className} flex flex-row items-center leading-none text-white`,children:[s.jsx(a.Z,{className:"h-12 w-12 rotate-[15deg]"}),s.jsx("p",{className:"text-[44px]",children:"Acme"})]})}},91853:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>e});var a=r(46650);let e=(await (0,a.createProxy)(String.raw`/Users/gokul.krishna/Documents/gitprojects/nextjs-dashboard/app/ui/dashboard/nav-links.tsx`)).default;s()}catch(e){s(e)}},1)},30672:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{$$ACTION_0:()=>h,default:()=>m});var a=r(81299),o=r(30796);r(37357);var i=r(71290),n=r(91853),c=r(30264),l=r(58042),d=r(89609),u=e([n]);function m(){return(0,a.jsxs)("div",{className:"flex h-full flex-col px-3 py-4 md:px-2",children:[a.jsx(i.default,{className:"mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40",href:"/",children:a.jsx("div",{className:"w-32 text-white md:w-40",children:a.jsx(c.Z,{})})}),(0,a.jsxs)("div",{className:"flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2",children:[a.jsx(n.Z,{}),a.jsx("div",{className:"hidden h-auto w-full grow rounded-md bg-gray-50 md:block"}),a.jsx("form",{action:(0,o.j)("13e1f239015ed49b08f70c65ec72f1000ec7943c",h),children:(0,a.jsxs)("button",{className:"flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",children:[a.jsx(l.Z,{className:"w-6"}),a.jsx("div",{className:"hidden md:block",children:"Sign Out"})]})})]})]})}async function h(){await (0,d.w7)()}n=(u.then?(await u)():u)[0],s()}catch(e){s(e)}})},89609:(e,t,r)=>{"use strict";r.d(t,{zB:()=>u,w7:()=>m});var s=r(82771),a=r(28152),o=r(78422),i=r(5141),n=r(67096),c=r.n(n);async function l(e){try{return(await (0,i.i6)`SELECT * FROM users WHERE email=${e}`).rows[0]}catch(e){throw console.error("Failed to fetch user:",e),Error("Failed to fetch user.")}}let{auth:d,signIn:u,signOut:m}=(0,s.ZP)({pages:{signIn:"/login"},trustHost:!0,callbacks:{authorized({auth:e,request:{nextUrl:t}}){let r=!!e?.user;return t.pathname.startsWith("/dashboard")?!!r:!r||Response.redirect(new URL("/dashboard",t))}},providers:[],providers:[(0,a.Z)({async authorize(e){let t=o.z.object({email:o.z.string().email(),password:o.z.string().min(6)}).safeParse(e);if(t.success){let{email:e,password:r}=t.data,s=await l(e);if(!s)return null;if(await c().compare(r,s.password))return s}return console.log("Invalid credentials"),null}})]})},5245:()=>{},5232:(e,t,r)=>{"use strict";function s(){for(var e,t,r=0,s="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=function e(t){var r,s,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t)){var o=t.length;for(r=0;r<o;r++)t[r]&&(s=e(t[r]))&&(a&&(a+=" "),a+=s)}else for(s in t)t[s]&&(a&&(a+=" "),a+=s)}return a}(e))&&(s&&(s+=" "),s+=t);return s}r.d(t,{W:()=>s,Z:()=>a});let a=s}};