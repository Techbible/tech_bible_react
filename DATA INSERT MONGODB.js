/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('techbible');

// Insert a few documents into the sales collection.
db.getCollection('Tools').insertMany([
 {
   "Name": "24Task",
   "Description": "Hire verified freelancers ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/61aa009eb3bc3271df74fe4a_1581071160272.jpeg",
   "Category": "hire-talent",
   "URL": "https://24taskpromo.page.link/IMGTA10",
   "Price": "Freemium",
   "Keywords": "24Task,",
   "LikedBy" : []
   
 },
 {
   "Name": "Active Campaign",
   "Description": "Active Campaign is an email marketing and sales automation software, it helps you create powerful workflows that keep customers on your site longer and convert them to paying ones. You can craft beautiful bulk emails, optimise mailing lists for better segmentation, it saves you time and help you scale your email marketing easily. Its CRM functionalities will help you manage your customer relationships, streamline your sales processes, and improve your customer engagement.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97dd2192b168915a3d44_uc.png",
   "Category": "sales",
   "URL": "https://www.activecampaign.com/",
   "Price": "",
   "Keywords": "Active Campaign,Customer Experience Automation, Email Marketing, Marketing Automation, CRM, Sales Automation",
   "LikedBy" : []
   
 },
 {
   "Name": "ActiveCampaign",
   "Description": "An email marketing, marketing automation, sales automation, and CRM software platform.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd308ee2be4b_qZNppe_4_400x400.png",
   "Category": "use-ai",
   "URL": "https://www.activecampaign.com/",
   "Price": "Paid",
   "Keywords": "ActiveCampaign,",
   "LikedBy" : []
   
 },
 {
   "Name": "ActiveDemand",
   "Description": "ActiveDemand is a flexible marketing automation platform for digital marketing agencies, senior living providers, and marketers. Using automated marketing you can convert leads and prospects into customers, manage nurture campaigns, auto-replies and more. It also packages a range of features, such as email marketing, call tracking, real-time personalization, reporting and much more, all into a single application, automate workflows using no code at all this way your reporting can be through daily, weekly or monthly digests. You can also build landing pages and dynamic websites and a lot more with its drag-and-drop editor making it easy to build with all the available templates",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a484ea9b98406c5ec0cd_uc.png",
   "Category": "analytics",
   "URL": "https://www.activedemand.com/",
   "Price": "Paid",
   "Keywords": "ActiveDemand,Marketing Automation, Analytics, Landing pages, Call tracking, E-mail Marketing",
   "LikedBy" : []
   
 },
 {
   "Name": "Acuity Scheduling",
   "Description": "This tool lets your clients view real-time availability and self-book online 24/7 - For Squarespace Websites",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd8208e2bef1_Bum7_LyX_400x400.png",
   "Category": "collaboration",
   "URL": "https://acuityscheduling.com/",
   "Price": "Paid",
   "Keywords": "Acuity Scheduling,",
   "LikedBy" : []
   
 },
 {
   "Name": "Adext",
   "Description": "The beautiful thing about Adext is that it does a lot of the grunt work that can normally take hours and hours for humans to perform. Through their machine learning algorithms, you can identify audience segments, campaign performance optimisations, auto budget recommendations, and lots more to strive for better results across your accounts.The tool is user-friendly, so there's no complex setup and it helps you optimize your digital advertising campaigns.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8ceb165499893ce5a2cfa_Adext%20Logo.png",
   "Category": "analytics",
   "URL": "https://www.adext.ai/",
   "Price": "Paid",
   "Keywords": "Adext,Custom Report, Budget Optimizer, Expert Assistance, Advanced Analytics, Automated Testing",
   "LikedBy" : []
   
 },
 {
   "Name": "Adobe Premiere",
   "Description": "When it comes to video editing, you can't go past Adobe Premier because it's still one of the premier video tools available and with it you can experience powerful editing features to help you in your creation of your profesionnal videos. It has new features, such as the automatic captions which can be created based on text transcriptions, you can also easily edit transcriptions and audio together. What can be considered as a cool feature is the ability to automatically resize videos whilst keeping quality. Great for producing mobile and social media specific videos.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a484a3a619d5cbf6111b_uc.png",
   "Category": "createcontent",
   "URL": "https://www.adobe.com/products/premiere.html",
   "Price": "Paid",
   "Keywords": "Adobe Premiere,Video Editing, Video Creation, Content Creation, User Friendly",
   "LikedBy" : []
   
 },
 {
   "Name": "Adscook",
   "Description": "Adscook aims to help you scale your Facebook ad campaigns more efficiently by automating certain tasks and providing advanced analytics and optimization features. It's user friendly and designed for experienced advertisers and even beginners, it's really easy to create variants, You can split-test anything, whether it be copy, design, call to action (CTAs). You'll be able to analyse results and see what you can kill/scale.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8d3f2ab0da6510e99de2e_Adext%20logo%20(1).png",
   "Category": "analytics",
   "URL": "https://adscook.com/",
   "Price": "Paid with Free Trial",
   "Keywords": "Adscook,Optimization Strategies, Automated Ad Creation, Analytics, Ad Campaigns",
   "LikedBy" : []
   
 },
 {
   "Name": "Adspresso",
   "Description": "Adspresso is a powerful tool for advertisers who want to improve the performance of their social media campaigns. It provides a range of advanced features that can help you target specific audiences, create effective ads, and optimize campaigns for maximum return on investment. With this tool, you can create campaigns, manage and analyze them all in one centralised place. ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8d6fa83bf33c49c82781d_adespresso-logo-1.png",
   "Category": "sales",
   "URL": "https://adespresso.com/",
   "Price": "Paid",
   "Keywords": "Adspresso,Ad Creation, Advanced Targeting, Automated Optimization, Ad Testing, Reporting and Analytics",
   "LikedBy" : []
   
 },
 {
   "Name": "AffiliateWP",
   "Description": "AffiliateWP is an easy to use and full-featured affiliate marketing plugin for WordPress.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd4e34e2becd_k5nxooyu_400x400.png",
   "Category": "automate",
   "URL": "https://affiliatewp.com/",
   "Price": "Freemium",
   "Keywords": "AffiliateWP,",
   "LikedBy" : []
   
 },
 {
   "Name": "Agency Analytics",
   "Description": "AgencyAnalytics is the only reporting platform designed specifically for marketing agencies, this easy-to-use platform saves you time, improves reporting processes, scales your marketing agency and impresses your clients with insightful reports and live customizable marketing dashboards that showcase your full marketing impact.  Automate the whole process of your marketing metrics for your clients, and present it in a beautiful-looking dashboard.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a4836ff5646950faa6ab_uc.webp",
   "Category": "analytics",
   "URL": "https://agencyanalytics.com/",
   "Price": "",
   "Keywords": "Agency Analytics,Automated Reports, Custom Dashboards, Marketing Agencies, Analytics",
   "LikedBy" : []
   
 },
 {
   "Name": "AirFocus ",
   "Description": "Build dynamic and strategic product roadmaps with ease and consolidate them into a product portfolio. ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63171fdf3f94a26d648a567d_Microsoft.VisualStudio.Services.Icons.Default.png",
   "Category": "product-management-stack",
   "URL": "http://airfocus.com?via=ghita46",
   "Price": "Freemium",
   "Keywords": "AirFocus ,",
   "LikedBy" : []
   
 },
 {
   "Name": "Airmeet",
   "Description": "Airmeet is the fastest growing platform for hosting a rich variety of virtual events. From Hackathons to ice-breakers, panel discussions to workshops. Its intuitive experience delivers on organisers expectations for a wide range of events and not just conferences. Every event takes place in a virtual ���������������������������ballroom��������������������������� which can be customised in appearance and seating arrangements. Airmeet has the suite of tools you need for hassle-free event registerations for attendees, seamless networking experiences and match-making based on attendee details/profiles to interactive booths, and loads more. All the engagement tools are there for anyone running virtual events including giving viewers the chance to speak",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8bf58d6e86c48747d4ac4_Airmeet%20Logo.png",
   "Category": "community",
   "URL": "https://www.airmeet.com/",
   "Price": "Freemium",
   "Keywords": "Airmeet,Virtual events, Video conferencing, Networking, Online conferences, Webinars",
   "LikedBy" : []
   
 },
 {
   "Name": "Alchemer",
   "Description": "Alchemer (formerly SurveyGizmo) is an online survey tool that helps companies design surveys and collect and analyze data, the software has a lot more powerful capabilities including  communication, multi-channel forms and more.You'll be able to get deep insights into your audience and analytics, through responses and integrations.You can also communicate to your audiences through video, sms, email and even audio.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a48e6ff56451cdfaa7c0_uc.png",
   "Category": "sales",
   "URL": "https://www.alchemer.com/",
   "Price": "",
   "Keywords": "Alchemer,Online Survey, Collect Data, Analytics, Customer Experience",
   "LikedBy" : []
   
 },
 {
   "Name": "Allfactor.io",
   "Description": "Market intelligence Platform for  E-Commerce businesses",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614ee00dcaf5b7db43f21ee8_large.png",
   "Category": "analytics",
   "URL": "https://www.allfactor.io",
   "Price": "Free package",
   "Keywords": "Allfactor.io,",
   "LikedBy" : []
   
 },
 {
   "Name": "AlsoAsked",
   "Description": "An organised view of what people ask on the web & a breakdown of which questions users are asking about a topic",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614edfd787262368389bf2d4_VtaZX6MF_400x400.png",
   "Category": "createcontent",
   "URL": "https://alsoasked.com/",
   "Price": "Free package",
   "Keywords": "AlsoAsked,",
   "LikedBy" : []
   
 },
 {
   "Name": "Amplitude",
   "Description": "Amplitude is a product analytics platform that helps businesses to track visitors with the help of collaborative analytics. it uses behavioral reports to understand users' interactions with products and provides insights to accelerate work on a real-time basis. It helps businesses grow by using conversion and retention metrics. its features include insights into customer experience, growth engine (beta) for product iteration, creating product portfolios, and SQL access for custom queries. The behavioral platform helps in creating a 360-degree view across the customers' journey. Its growth engine generates hypotheses data by observing customer behavior while also amplifying winning features and campaign ideas. Amplitude provides features including the ability to set product strategy, improve user engagement, optimize conversion and drive retention. These solutions help in measuring the impact of experiments and new releases. Additionally, it benchmarks new features against old ones.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e43955e01cff353b56_uc.png",
   "Category": "analytics",
   "URL": "https://amplitude.com/",
   "Price": "",
   "Keywords": "Amplitude,Product analytics, User behavior tracking, Data visualization, Mobile analytics, Conversion optimization",
   "LikedBy" : []
   
 },
 {
   "Name": "AngelMatch",
   "Description": "Free pitch deck database and paid access to an angel investors network ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/61ee8309e27eea006bb0daf4_Logo-notext.svg",
   "Category": "investment",
   "URL": "https://angelmatch.io",
   "Price": "Freemium",
   "Keywords": "AngelMatch,",
   "LikedBy" : []
   
 },
 {
   "Name": "Animoto",
   "Description": "If you���������������������������ve ever tried to put together a slideshow you know how painstaking and tedious it can be. Animoto offers you an alternative this online video making software allows you to simply upload all your photos, choose a theme, add a few text frames, and you���������������������������re ready to export. With this platform, creating videos has never been easier. It has a nice drag-and-drop interface to help you in your creation fast. Of course, you can customise videos with your ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a484a3a6192ad1f61113_uc.png",
   "Category": "createcontent",
   "URL": "https://animoto.com",
   "Price": "",
   "Keywords": "Animoto,Video Maker, Software, Drag and Drop interface, Customising",
   "LikedBy" : []
   
 },
 {
   "Name": "Anyword",
   "Description": "Anyword is an AI-powered copywriting tool that helps users generate high-quality marketing copy more quickly and easily, while also providing collaboration and workflow tools to improve efficiency and productivity.  Anywords features to help users generate effective copy, including customizable templates, pre-written text snippets, and the ability to create custom templates based on past successful campaigns.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97d682c4d759ab35663b_uc.webp",
   "Category": "copywriting",
   "URL": "https://anyword.com/",
   "Price": "",
   "Keywords": "Anyword,Copywriting templates, Workflow automation, Copy Generating, AI Writing Assistant",
   "LikedBy" : []
   
 },
 {
   "Name": "Apollo",
   "Description": "Generate leads, acess the database of prospects and automate you sales outreach",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614ee0fdde1665fb1331c93d_apollo-io.png",
   "Category": "sales",
   "URL": "https://www.apollo.io",
   "Price": "Free package",
   "Keywords": "Apollo,",
   "LikedBy" : []
   
 },
 {
   "Name": "Aspire IQ",
   "Description": "Influencer marketing & community building services platform for large compaigns",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e0f30d4d596eb12ba9177_aspireiq_logo_2019.jpg",
   "Category": "find-influencers",
   "URL": "https://www.aspireiq.com",
   "Price": "Paid",
   "Keywords": "Aspire IQ,",
   "LikedBy" : []
   
 },
 {
   "Name": "Aweber",
   "Description": "AWeber is an email marketing tool that provides businesses and individuals with the tools they need to send professional and effective email campaigns. With it, users can create email newsletters, autoresponders, and targeted follow-up sequences to engage with their subscribers and customers. The platform also includes features such as email templates, drag-and-drop email builders, automation workflows, Split testing, and analytics to help users optimize their email campaigns and improve their overall marketing strategy. AWeber also offers integrations with other platforms, including social media, landing page builders, and e-commerce tools, to help users build their email lists and drive conversions",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97d9ddc679b16d5866e5_uc.png",
   "Category": "sales",
   "URL": "https://www.aweber.com/index-t2.htm",
   "Price": "",
   "Keywords": "Aweber,Email Campaigns, Email Templates, Marketing Strategy, Analytics, Landing Pages",
   "LikedBy" : []
   
 },
 {
   "Name": "Balsamiq",
   "Description": "Balsamiq Cloud is a web-based user interface design tool for creating wireframes (sometimes called mockups or low-fidelity prototypes), you can use it to generate digital sketches of your idea or concept for an application or website, and to facilitate discussion and understanding before any code is written. The completed wireframes can be used for user testing, clarifying your vision, getting feedback from stakeholders, or getting approval to start development . This platform is perfect for rapid prototyping and great for wireframes that can be used especially for non-designers, to communicate layouts and designs for developers and experienced high-fidelity designers. It's one of the best tools to get rapid feedback, and make changes on the fly. You can re-use components across your wireframes to generate multiple versions for feedback, interactive prototypes and more.What makes the tool really quick to pickup and produce prototypes so quickly is the drag-and-drop editor. You'll find pre-built components which speeds up the process so you can edit copy and do exports.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e8d75b0bf793260cb4_uc.png",
   "Category": "nocode",
   "URL": "https://balsamiq.com/",
   "Price": "",
   "Keywords": "Balsamiq,Wireframes, Mockups, Rapid prototyping, User interface design, Low-fidelity.",
   "LikedBy" : []
   
 },
 {
   "Name": "Beacons ",
   "Description": "Quick landing pages for content creators ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/61472b715c9734ee3b1cc927_bw_logo_full.png",
   "Category": "social-media",
   "URL": "https://beacons.ai/signup?c=mytechbible",
   "Price": "Free",
   "Keywords": "Beacons ,",
   "LikedBy" : []
   
 },
 {
   "Name": "BeeFree",
   "Description": "Free responsive emails and landing pages editor. With BEE drag-and-drop builders embedded in many software applications you can start designing now!",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/62a0dd9357ac64ffe7c33615_twitter.jpg",
   "Category": "community",
   "URL": "https://beefree.grsm.io/mtyws4nbqeq6",
   "Price": "Free",
   "Keywords": "BeeFree,",
   "LikedBy" : []
   
 },
 {
   "Name": "Behance",
   "Description": "Post a design job and find inspiration for your next design project. Designers you can get hired on here too ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/6159d277d0b0fe5ceeaa619d_png-transparent-behance-logo-adidas-blue-angle-text-thumbnail.png",
   "Category": "design",
   "URL": "https://www.behance.net/galleries?tracking_source=nav20",
   "Price": "Free",
   "Keywords": "Behance,",
   "LikedBy" : []
   
 },
 {
   "Name": "Bitclout",
   "Description": "Crypto social network: Your favorite creator has a coin you can buy or sell. The price goes up as more people buy. You can have your own coin too.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/6159d4351ba06d548a53938b_pT58lBS-_400x400.png",
   "Category": "web-3-0",
   "URL": "https://bitclout.com",
   "Price": "Free",
   "Keywords": "Bitclout,",
   "LikedBy" : []
   
 },
 {
   "Name": "Biteable",
   "Description": "Biteable is a video editing solution, which enables you to create videos with animations, stock footage and images on a unified platform, Agencies can add watermarks, logos, audio and text to created content according to requirements. It helps you create beautiful looking and high quality videos in the matter of minutes. The editor is user friendly especially if you're using Biteable for the first time. You can make videos for almost anything to help get your message across to your audience.  All in all if you're interested in  generating more leads and customers for your business or just creating an amazing piece of content, then look no further Biteable is for you !",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a484a3a6190a46f6111a_uc.png",
   "Category": "createcontent",
   "URL": "https://biteable.com/",
   "Price": "",
   "Keywords": "Biteable,Video Creation, Video Editing, Content Creation, User Friendly",
   "LikedBy" : []
   
 },
 {
   "Name": "Blender",
   "Description": "Free 3D modelling & animation software ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/61c875942392ae7aafbdab72_Blender_logo_no_text.svg.png",
   "Category": "design",
   "URL": "https://www.blender.org",
   "Price": "Free",
   "Keywords": "Blender,",
   "LikedBy" : []
   
 },
 {
   "Name": "Bonjoro",
   "Description": "Bonjoro helps you boost sales and bust churn with personalized video funnels.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd18aae2be89_ZE5P-C-J_400x400.jpg",
   "Category": "sales",
   "URL": "https://www.bonjoro.com/",
   "Price": "Paid with Free Trial",
   "Keywords": "Bonjoro,",
   "LikedBy" : []
   
 },
 {
   "Name": "Brand24",
   "Description": "Get instant access to brand mentions across social, news, blogs, videos, forums, podcasts, reviews and more.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e138aff782ceb54d0c39d_1519952422909.jpeg",
   "Category": "analytics",
   "URL": "https://brand24.grsm.io/o09we0pbz1eb",
   "Price": "Paid with Free Trial",
   "Keywords": "Brand24,",
   "LikedBy" : []
   
 },
 {
   "Name": "Budibase ",
   "Description": "Build internal apps with this low code tool - connectes with any kind of database",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/62ecd4daa4f21f8699a50309_budibase-logo.png",
   "Category": "nocode",
   "URL": "https://budibase.com",
   "Price": "Free",
   "Keywords": "Budibase ,",
   "LikedBy" : []
   
 },
 {
   "Name": "Buffer",
   "Description": "Buffer is an intuitive social media management platform to help drive social media results.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bda47ce2bee6_at7sBgO7_400x400.png",
   "Category": "social-media",
   "URL": "https://buffer.com/",
   "Price": "",
   "Keywords": "Buffer,",
   "LikedBy" : []
   
 },
 {
   "Name": "BuildSpace",
   "Description": "Learn about web3 + start building cool stuff right now,",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/61b36809b7294e4070a081dc_f71c1437-09d6-45e9-a6e8-3f18592cc3ef_image-removebg-preview_1_png.png",
   "Category": "web-3-0",
   "URL": "https://buildspace.so",
   "Price": "Freemium",
   "Keywords": "BuildSpace,",
   "LikedBy" : []
   
 },
 {
   "Name": "BuiltWith",
   "Description": "Find out what websites are built with and many more prospecting & research features",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e0ef854018b3165cc27ff_300.png",
   "Category": "analytics",
   "URL": "https://builtwith.com",
   "Price": "Free",
   "Keywords": "BuiltWith,",
   "LikedBy" : []
   
 },
 {
   "Name": "BuzzSumo",
   "Description": "Use our content insights to generate ideas, create high-performing content, monitor your performance and identify influencers.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614dfbe5a5bced757e903873_h0Z9n_c-_400x400.png",
   "Category": "social-media",
   "URL": "https://buzzsumo.com",
   "Price": "Paid with Free Trial",
   "Keywords": "BuzzSumo,",
   "LikedBy" : []
   
 },
 {
   "Name": "Calendly",
   "Description": "Free and easy to use online appointment scheduling software.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd1a53e2beef_hp4UxVSr_400x400.png",
   "Category": "collaboration",
   "URL": "https://calendly.com/",
   "Price": "Freemium",
   "Keywords": "Calendly,",
   "LikedBy" : []
   
 },
 {
   "Name": "Campaign Monitor",
   "Description": "Campaign Monitor is a straightforward email marketing that allows businesses and organizations to create, send, and track email campaigns, it's the tool that enables marketers to send beautiful and personalized emails, creating a reliable channel to grow engagement with subscribers and promote loyal readership and conversions. Beautiful templates, drag-and-drop builder, and engagement-based segmentation allow marketers to deliver targeted content to large lists of subscribers without any technical expertise. Campaign Monitor Provides features such as Email Campaign Creation, List Management, Email Automation, Split Testing, Analytics and Reporting. Overall, it's a comprehensive email marketing tool that can help businesses of all sizes to improve their email marketing efforts and drive better results.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97da61bbf2b5d715beda_uc.png",
   "Category": "sales",
   "URL": "https://www.campaignmonitor.com/",
   "Price": "",
   "Keywords": "Campaign Monitor,Email Campaign Creation, List Management, Email Automation, Analytics, Reporting",
   "LikedBy" : []
   
 },
 {
   "Name": "Camtasia",
   "Description": "Camtasia is a software suite built for video-editing beginners and designed for creating and recording video tutorials and presentations. It is packed with features such as easy editing through drag-and-drop, pre-built assets, templates, libraries, themes and more, which makes it such a great choice for non-experienced video editors. There are also lots of customisable templates on offer, speeding up the process of video creation for non-video editors.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a4862ea727ddd20ca39a_uc.png",
   "Category": "createcontent",
   "URL": "https://www.techsmith.com/video-editor.html",
   "Price": "Paid with Free Trial",
   "Keywords": "Camtasia,Screen Recording, Video Creation, Video Editing, Drag and Drop, Video Templates",
   "LikedBy" : []
   
 },
 {
   "Name": "Canva",
   "Description": "Use Canva's drag-and-drop feature and layouts to design, share and publish your images.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bddeffe2bee1_EveRZNUE_400x400.jpg",
   "Category": "design",
   "URL": "https://www.canva.com/",
   "Price": "",
   "Keywords": "Canva,",
   "LikedBy" : []
   
 },
 {
   "Name": "Canva Pro",
   "Description": "Canva Pro is a fantastic graphic design tool with so much functionality and super handy features, the pro version has many great benefits and it is very affordable. If you're a blogger, entrepreneur, or small business owner, it will save you time and money. Whether you want to create TikTok or YouTube videos, stories and other formats/dimensions, you can do it. You can also edit videos on mobile which is cool. Animating videos is made easy with pre-made animations. Choose from watermark-free stock footage, images and audio tracks. You can also add icons and illustrations.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a4840058f37270f3b126_uc.png",
   "Category": "createcontent",
   "URL": "https://www.canva.com/pro/",
   "Price": "Freemium",
   "Keywords": "Canva Pro,Graphic Design, Content Creation, Video Edits, Video Creation",
   "LikedBy" : []
   
 },
 {
   "Name": "Carrd",
   "Description": "Simple, free, fully responsive one-page sites for pretty much anything. Great for portfolios. ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bde617e2bf04_Carrd-logo.png",
   "Category": "nocode",
   "URL": "https://carrd.co/",
   "Price": "Free package",
   "Keywords": "Carrd,",
   "LikedBy" : []
   
 },
 {
   "Name": "Chargebee",
   "Description": "The subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.",
   "Icon": "",
   "Category": "",
   "URL": "https://www.chargebee.com/partners/",
   "Price": "",
   "Keywords": "Chargebee,",
   "LikedBy" : []
   
 },
 {
   "Name": "ChartMogul",
   "Description": "ChartMogul provides subscription reporting, analytics & metrics for Stripe, Braintree, PayPal and more.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bda6d5e2bef5_LM0YoAwU_400x400.jpg",
   "Category": "collaboration",
   "URL": "https://chartmogul.com/",
   "Price": "",
   "Keywords": "ChartMogul,",
   "LikedBy" : []
   
 },
 {
   "Name": "Churnzero",
   "Description": "A better view of the customer lifecycle is possible with a holistic Customer Success management platform",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e13283b84a07e4a7adcbc_ChurnZero-Logo-Dark-on-Light-Stacked-LARGE-300x175.png",
   "Category": "analytics",
   "URL": "https://churnzero.net",
   "Price": "Paid",
   "Keywords": "Churnzero,",
   "LikedBy" : []
   
 },
 {
   "Name": "Cinepacks",
   "Description": "Marketplace for video effects",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e0cecc8805129fc6262a1_sidebarsite_90a692ef-6112-4a6c-9d1a-9666644b2f59_480x.png",
   "Category": "createcontent",
   "URL": "https://cinepacks.store",
   "Price": "Paid",
   "Keywords": "Cinepacks,",
   "LikedBy" : []
   
 },
 {
   "Name": "Clarity by Microsoft",
   "Description": "Replay user sessions and explore heatmaps to make your website work better for your customers and your business, for free.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e0a58200f161469dda08a_Microsoft-Clarity-Logo.jpg",
   "Category": "analytics",
   "URL": "https://clarity.microsoft.com",
   "Price": "Free package",
   "Keywords": "Clarity by Microsoft,",
   "LikedBy" : []
   
 },
 {
   "Name": "Closers Copy",
   "Description": "ClosersCopy is more than just an AI writing tool because it can help you with content research and copywriting. It has a huge library of templates that you can use to write content for your business and website. ClosersCopy is beginner-friendly, which means it can be used by expert & beginner writers alike, it provides a variety of features to help users generate effective copy, including customizable templates and pre-written text snippets that users can modify and use in their copy. The platform also provides collaboration tools that allow users to work together on copy creation, provide feedback, and track changes in real-time",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef89126cb045240792db57_Untitled%20design-36.png",
   "Category": "copywriting",
   "URL": "https://www.closerscopy.com/",
   "Price": "",
   "Keywords": "Closers Copy,Content Research, Copywriting, AI writing, Content Generation",
   "LikedBy" : []
   
 },
 {
   "Name": "CloudApp",
   "Description": "CloudApp is an easy-to-use screen recorder for sharing screen capture and webcam videos.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd2450e2beab_3UdME5Nm_400x400.jpg",
   "Category": "collaboration",
   "URL": "https://www.getcloudapp.com/",
   "Price": "Free package",
   "Keywords": "CloudApp,",
   "LikedBy" : []
   
 },
 {
   "Name": "Codex ",
   "Description": "OpenAI Codex is a general-purpose programming model, meaning that it can be applied to essentially any programming task (though results may vary).",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/6151b609eee270e4262ec6bc_openai-avatar.png",
   "Category": "use-ai",
   "URL": "https://openai.com/blog/openai-codex/",
   "Price": "Free",
   "Keywords": "Codex ,",
   "LikedBy" : []
   
 },
 {
   "Name": "Cognism.com",
   "Description": "Sales prospecting and engagement tool that provide go-to- market data",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e125f57c4870e122c2ab1_Cognism-Deep-Blue_320x78_%402x.png",
   "Category": "sales",
   "URL": "https://www.cognism.com/",
   "Price": "Paid",
   "Keywords": "Cognism.com,",
   "LikedBy" : []
   
 },
 {
   "Name": "Communo",
   "Description": "Marketplace for creative talent, an easy way for marketers and agencies to find the best marketers and designers nearby",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e2609d35a5a2c99feb221_communo-logo.png",
   "Category": "hire-talent",
   "URL": "https://communo.com",
   "Price": "Paid",
   "Keywords": "Communo,",
   "LikedBy" : []
   
 },
 {
   "Name": "Constant Contact",
   "Description": "Constant Contact is an online marketing platform that provides email marketing, social media advertising, search engine advertising, and e-commerce features to help small businesses and non-profit organizations connect with customers and grow their businesses. It allows users to create and manage email campaigns, design professional-looking emails and landing pages, and track campaign performance through analytics. it also offers integrations with other marketing tools, such as social media management and e-commerce platforms.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97d9655f71456117aa92_uc.png",
   "Category": "sales",
   "URL": "https://www.constantcontact.com/landing1/global-home",
   "Price": "",
   "Keywords": "Constant Contact,Email marketing, Marketing automation, E-commerce integration, Social media advertising, Reporting and analytics",
   "LikedBy" : []
   
 },
 {
   "Name": "Content Row",
   "Description": "Helps you analyse and improve your copy for ads",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e10729dc2cd3fd1323e2c_GprmomIU.jpg",
   "Category": "copywriting",
   "URL": "https://www.contentrow.com/tools/headline-generator",
   "Price": "Free package",
   "Keywords": "Content Row,",
   "LikedBy" : []
   
 },
 {
   "Name": "ConvertKit",
   "Description": "ConvertKit is email marketing software that helps online creators earn a living through email marketing.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd8d0ce2be51_-jALXPkt_400x400.jpg",
   "Category": "createcontent",
   "URL": "https://convertkit.com/",
   "Price": "Freemium",
   "Keywords": "ConvertKit,",
   "LikedBy" : []
   
 },
 {
   "Name": "Copy.ai",
   "Description": "AI copywriter that enables you to create marketing copy in seconds!",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e06f243832dd21c419b0f_5f80d368908a304b3238efbb_logo.png",
   "Category": "copywriting",
   "URL": "https://www.copy.ai/",
   "Price": "Paid with Free Trial",
   "Keywords": "Copy.ai,",
   "LikedBy" : []
   
 },
 {
   "Name": "CouldDevs",
   "Description": "Hire Experienced Latin American Remote Developers for $40-50/ hour",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/61850f95c12f1187a94711db_newblue.svg",
   "Category": "hire-talent",
   "URL": "https://clouddevs.com",
   "Price": "Paid",
   "Keywords": "CouldDevs,",
   "LikedBy" : []
   
 },
 {
   "Name": "Craftwork",
   "Description": "High-quality interface assets for designers and startup creatives",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e0e361369c02409fc235b_images.png",
   "Category": "design",
   "URL": "https://craftwork.design",
   "Price": "Paid",
   "Keywords": "Craftwork,",
   "LikedBy" : []
   
 },
 {
   "Name": "Crazy Egg",
   "Description": "Crazy Egg is an online tool that monitors individual pages on your website and App, it`s one of the Original heatmapping and recording Conversion rate optimization tools on the market.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63e393129339e85a3b841dd4_crazyegg_logo_avatar_400x400.png",
   "Category": "analytics",
   "URL": "https://www.crazyegg.com/",
   "Price": "Paid with Free Trial",
   "Keywords": "Crazy Egg,",
   "LikedBy" : []
   
 },
 {
   "Name": "Crello",
   "Description": "Use Crello to discover the world of professionally designed templates for social media, ads and web. ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bde724e2bee5_3kaVy9gg_400x400.jpg",
   "Category": "design",
   "URL": "https://crello.com/",
   "Price": "",
   "Keywords": "Crello,",
   "LikedBy" : []
   
 },
 {
   "Name": "Cyfe",
   "Description": "Cyfe is a business intelligence and analytics platform that allows businesses and individuals to connect to various data sources, including social media, website analytics, customer support, finance, and more, and create customizable dashboards to track and analyze their KPIs in real-time. The platform provides users with a range of pre-built widgets, including gauges, charts, tables, and more, as well as a drag-and-drop interface that enables users to create customized dashboards without the need for coding or advanced technical skills, it also offers features such as data blending, alerts, and data exports, which help users to organize, clean, and transform their data, receive notifications when specific KPIs reach certain thresholds, and export their data for further analysis and reporting. Cyfe is a powerful tool for businesses and individuals looking to gain insights and make data-driven decisions based on their data from various sources in a single place.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e84ac6a978b552f4f0_uc.png",
   "Category": "analytics",
   "URL": "https://www.cyfe.com/",
   "Price": "",
   "Keywords": "Cyfe,Business intelligence, Analytics, Real-time monitoring, Customizable dashboards,Data integration.",
   "LikedBy" : []
   
 },
 {
   "Name": "DashThis",
   "Description": "DashThis is a marketing reporting software, allowing you to create custom dashboards for SEO, social media, analytics and display advertising reports. Users can integrate multiple data sources, allowing marketers and agencies keep track of their marketing efforts and digital strategies. With that many integrations and the ability to import custom data sources, you can see all your important metrics in one place and it saves you hours of work and helps you create your reports in the blink of an eye.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a482a3a61969bef6110b_uc.png",
   "Category": "analytics",
   "URL": "https://dashthis.com/",
   "Price": "",
   "Keywords": "DashThis,Marketing, Reports, Software, Date sources",
   "LikedBy" : []
   
 },
 {
   "Name": "Databox",
   "Description": "Databox helps you sync all your important marketing sources and metrics into beautiful looking dashboards.Setup goals, scorecards, notifications and alerts, to ensure you stay on top of the metrics that matter for your business. Not only that, these features help you make decisions faster, whether to capilalise and double down on opportunities, or to quickly fix areas that need attention.There are a plethora of integrations available, as well as pre-built reports/templates helping you build dashboards fast. Users can connect with various sources of cloud-based data such as HubSpot, Google Analytics, Instagram, Stripe, Facebook Ads and Moz. Users can also import data from their own databases using Databox���������������������������s REST API and SDKs. The Databox mobile app provides real-time access to company performance in the form of daily scorecards, weekly summaries and alerts. Databox Designer enables users to create custom dashboards using a drag-andailable. Users can configure a data wall of relevant KPIs and can control access by restricting IP addresses and setting permissions.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e704ff090e3aec5640_uc.webp",
   "Category": "analytics",
   "URL": "https://databox.com/",
   "Price": "",
   "Keywords": "Databox,Data dashboard, KPI tracking, Performance metrics, Marketing analytics, Customizable reports",
   "LikedBy" : []
   
 },
 {
   "Name": "Daz3D",
   "Description": "Free 3D animation software for beginners ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/61c874ff53ee9711b7fdb3c4_channels4_profile.jpg",
   "Category": "design",
   "URL": "https://www.daz3d.com",
   "Price": "Free",
   "Keywords": "Daz3D,",
   "LikedBy" : []
   
 },
 {
   "Name": "Debuild",
   "Description": "No code app builder. Just describe what your app should do in plain English, then start using it within seconds.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614c2526d3db75deb3bfcd8f_debuild-logo.png",
   "Category": "nocode",
   "URL": "https://debuild.co",
   "Price": "Paid",
   "Keywords": "Debuild,",
   "LikedBy" : []
   
 },
 {
   "Name": "Design bookmarks",
   "Description": "The Best Resources For Designers In One Place",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/615ddf14ab566042aa6e5849_edce610312c8dfddf9835deb27e47343.png",
   "Category": "design",
   "URL": "https://www.bookmarks.design",
   "Price": "Free",
   "Keywords": "Design bookmarks,",
   "LikedBy" : []
   
 },
 {
   "Name": "DesignBold",
   "Description": "DesignBold lets you create professional and simple designs for presentations, social media and your site.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd432ae2bee4_DWo6pMs7_400x400.jpg",
   "Category": "design",
   "URL": "https://www.designbold.com/",
   "Price": "",
   "Keywords": "DesignBold,",
   "LikedBy" : []
   
 },
 {
   "Name": "Designs ai",
   "Description": "Designs-ai is an all in one tool hat help individuals and businesses create high-quality designs, logos, and brand assets effortlessly. The platform offers several tools, including Logo Maker, Design Maker, and Graphic Maker, each of which uses AI and machine learning algorithms to provide users with customized design solutions. Logo Maker generates logos based on a set of preferences and design inputs, Design Maker uses A.I. to analyze your design requirements and generate thousands of variations instantly, Graphic Maker is a graphic design tool that offers a library of design templates for a wide range of applications, from social media posts to business cards. it offers also several other tools, including a color palette generator, font matcher, and social media image resizer, to help users create and optimize designs for different platforms and purposes. In Summary Designs.ai is built with the mission to empower imagination through artificial intelligence.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97d8a3c580f3c48a7bd4_uc.png",
   "Category": "design",
   "URL": "https://designs.ai/en",
   "Price": "",
   "Keywords": "Designs ai,AI-powered design tools, Logo maker, Graphic design templates, Social media image optimization",
   "LikedBy" : []
   
 },
 {
   "Name": "Discourse",
   "Description": "Discourse is modern community forum software for discussion forums, long-form chat rooms, and more.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd820de2be54_oIC5fRth_400x400.jpg",
   "Category": "community",
   "URL": "https://discourse.org/",
   "Price": "",
   "Keywords": "Discourse,",
   "LikedBy" : []
   
 },
 {
   "Name": "Dollar.Eighty",
   "Description": "Grow your Instagram account with the Gary Vaynerchuk $1.80 strategy. Boost your engagement with a meaningful, thoughtful audience.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e0259b072ea5b22509025_bdb353ab71cfe506cb6317e70c50700f.jpg",
   "Category": "social-media",
   "URL": "https://dollareighty.com/",
   "Price": "Paid with Free Trial",
   "Keywords": "Dollar.Eighty,",
   "LikedBy" : []
   
 },
 {
   "Name": "Dribble",
   "Description": "Discover the world�������������������������",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/6159d1fa4a22b334f4e2e785_dribbble%2Blogo%2Bnetwork%2Bsocial%2Bicon-1320086256852001411.png",
   "Category": "hire-talent",
   "URL": "https://dribbble.com",
   "Price": "Paid",
   "Keywords": "Dribble,",
   "LikedBy" : []
   
 },
 {
   "Name": "Drip",
   "Description": "Drip is an ecommerce CRM designed for building personal and profitable customer relationships at scale.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd84d8e2be52_d1parRu5_400x400.png",
   "Category": "community",
   "URL": "https://www.drip.com/",
   "Price": "Paid with Free Trial",
   "Keywords": "Drip,",
   "LikedBy" : []
   
 },
 {
   "Name": "Dripify",
   "Description": "LinkedIn automation tool designed to help your sales team improve LinkedIn prospecting and close more deals ����������",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614b2f1b672fc298d5863c40_dripify.png",
   "Category": "automate",
   "URL": "https://dripify.io/#a_aid=techbible",
   "Price": "Paid",
   "Keywords": "Dripify,",
   "LikedBy" : []
   
 },
 {
   "Name": "Facebook Ads Library",
   "Description": "The Facebook Ads Library is a valuable tool for researchers, journalists, and anyone who is interested in learning more about the advertising that is happening on Facebook and Instagram. It provides a level of transparency that was not previously available, making it easier for users to understand who is behind the ads they are seeing and how much money is being spent on them. it gives you the opportunity to benefit from its various features like Advertiser Information that allows users to search for ads by advertiser name, providing transparency about who is paying for political ads and other types of ads on the platform, Ad Content displays the text, images, and other content of each ad, making it easy for users to see what the ads look like, Ad Spend shows how much money the advertiser is spending on each ad, as well as the total spend for the advertiser, Demographic Information provides information about the audience that the advertiser is targeting with each ad, including age, gender, and location. Search and Filter Functions includes search and filter functions that allow users to search for ads by keyword, advertiser name, date range, and other criteria.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97dc82c4d745013566c4_uc.png",
   "Category": "analytics",
   "URL": "https://www.facebook.com/ads/library/?active_status=all&ad_type=political_and_issue_ads&country=MA&media_type=all",
   "Price": "",
   "Keywords": "Facebook Ads Library,Search and Filter Functions, Ad Content, Advertiser Information, Publicly Accessible, Transparency",
   "LikedBy" : []
   
 },
 {
   "Name": "Figma",
   "Description": "A design platform for teams who build products together from start to finish.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bdca76e2bf02_6wvx0JVW_400x400.jpeg",
   "Category": "design",
   "URL": "https://www.figma.com/",
   "Price": "Free",
   "Keywords": "Figma,",
   "LikedBy" : []
   
 },
 {
   "Name": "Figma",
   "Description": "Collaborative design software",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e0ddc57c4875c482c00a8_unnamed-4.png",
   "Category": "design",
   "URL": "https://www.figma.com",
   "Price": "Paid with Free Trial",
   "Keywords": "Figma,",
   "LikedBy" : []
   
 },
 {
   "Name": "Figstack",
   "Description": "Powered by AI and trained with billions of lines of code, Figstack supercharges your ability to read and write code across languages.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e2d35607f8a4d321b5aee_t5fshnvhnscnvpsio5d8.png",
   "Category": "use-ai",
   "URL": "https://www.figstack.com",
   "Price": "Free",
   "Keywords": "Figstack,",
   "LikedBy" : []
   
 },
 {
   "Name": "Filmora",
   "Description": "Filmora is a simple video editor that empowers you to edit video and audio on both Windows and Mac, and it comes with a massive amount of effects to choose from such as blending mode, creative transitions, filters and more, that way you won't go short of coming up with creative videos. You can edit your videos by adding transitions and effects, adjusting the volume, changing the speed of playback and it even enables you to add text to videos. It also provides green screen  to make the editing process more efficient.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a485a4d6a7844abced50_uc.jpeg",
   "Category": "createcontent",
   "URL": "https://filmora.wondershare.com/",
   "Price": "",
   "Keywords": "Filmora,Video Editing, User Friendly, Video Effects, Green Screen",
   "LikedBy" : []
   
 },
 {
   "Name": "Final Cut Pro",
   "Description": "Final Cut Pro, Apple's professional video editing software, targets both consumers who want more power for their video-editing projects, and professionals who create content for movies and television. If you love creating cinematic videos, whether it be movies, short stories or some sort of storytelling, then these features are here to  help you out like automation, core animation, colorsync integration, a resolution-independent playback system, Advanced Color Grading, Moving & Trimming Clips, Multicam Editing, 360 Degree VR Editing.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a4861895d86f3a004aec_uc.png",
   "Category": "createcontent",
   "URL": "https://www.apple.com/final-cut-pro/",
   "Price": "Paid with Free Trial",
   "Keywords": "Final Cut Pro,Video Editing, Video Creation, Content Creation, Cinematic Mode",
   "LikedBy" : []
   
 },
 {
   "Name": "Firstbase",
   "Description": "Set up your US company, EIN, registered agent & bank account all through this app. Efficiency at its best for new founders who want to incorporate in the US or if you just need a US address for your existing company.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/62f3c0c1349867dd5431e198_firstbase_io_logo.jpg",
   "Category": "investment",
   "URL": "https://firstbaseio.grsm.io/2nkrg2del4j1",
   "Price": "Paid",
   "Keywords": "Firstbase,",
   "LikedBy" : []
   
 },
 {
   "Name": "Fiverr Business",
   "Description": "Expand your team���������������������������",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/61556f10b25097ce81767119_2410695-middle.png",
   "Category": "hire-talent",
   "URL": "https://go.fiverr.com/visit/?bta=222142&nci=10919",
   "Price": "Paid",
   "Keywords": "Fiverr Business,",
   "LikedBy" : []
   
 },
 {
   "Name": "Flinto",
   "Description": "Flinto is a Mac app used by top designers around the world to create interactive and animated prototypes of their app designs. Create animated transitions, interactions, flow behaviours and loads more.You can use it to export videos and gifs, as well as drag them right into your designs, you can even create 3D rotations for your prototypes, alongside sound effects to take it to the next level.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a483e5c3e20fcf211338_uc.png",
   "Category": "design",
   "URL": "https://www.flinto.com/",
   "Price": "",
   "Keywords": "Flinto,Design, Animated transitions, Prototypes, 3D Rotations, Sound Effects",
   "LikedBy" : []
   
 },
 {
   "Name": "Flutterflow ",
   "Description": "Build Native iOS and Android Apps Without Code",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614c263531c07f069a537b29_fb33c21692341acf5e0659b9775c791d5a1c1da2.png",
   "Category": "nocode",
   "URL": "https://flutterflow.io",
   "Price": "Free package",
   "Keywords": "Flutterflow ,",
   "LikedBy" : []
   
 },
 {
   "Name": "Foundation",
   "Description": "NFT's Marketplace - Invite only - Creators are invited to join Foundation by members of the community.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/61c87e65a561fdf51d1217c4_fnd.jpg",
   "Category": "web-3-0",
   "URL": "https://foundation.app",
   "Price": "Freemium",
   "Keywords": "Foundation,",
   "LikedBy" : []
   
 },
 {
   "Name": "Framer",
   "Description": "Easy to use prototyping tool, amazing for beginners. Has a wide library of elements that you can just drag and drop ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/615dd9cb066d29637dd252e6_1*F6ufPKgGbyUPkWLZ-16ycw.png",
   "Category": "design",
   "URL": "https://www.framer.com",
   "Price": "Free package",
   "Keywords": "Framer,",
   "LikedBy" : []
   
 },
 {
   "Name": "Framer App",
   "Description": "Framer is a design and prototyping tool that enables you to create interactive and animated prototypes of your designs, it is known for its no code-based approach. A drag-and-drop interface, pre-built components and animations, and real-time collaboration are one the various features it offers. You can create interactive prototypes for web, mobile, and desktop applications, and test them on multiple devices and platforms. You can even Explore components such as buttons, audio, avatars, graphics and more thanks to it's component library.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a482c4807d5e40ee6076_uc.png",
   "Category": "nocode",
   "URL": "https://www.framer.com/",
   "Price": "Freemium",
   "Keywords": "Framer App,Design, Prototype, No-Code, Drag and Drop Interface",
   "LikedBy" : []
   
 },
 {
   "Name": "Frase",
   "Description": "An end-to-end SEO content creation workflow, powered by AI. You'll go from content idea, to SEO results faster and easier than ever before.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/6159cf81c3fdec2fde618ae4_0x0.png",
   "Category": "improve-my-seo",
   "URL": "https://www.frase.io",
   "Price": "Paid",
   "Keywords": "Frase,",
   "LikedBy" : []
   
 },
 {
   "Name": "Freshdesk",
   "Description": "FreshDesk is customer service and helpdesk software with smart automations to get things done faster.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd836de2beed_d0xmceuw_400x400.jpg",
   "Category": "analytics",
   "URL": "https://freshdesk.com/",
   "Price": "",
   "Keywords": "Freshdesk,",
   "LikedBy" : []
   
 },
 {
   "Name": "FullStory",
   "Description": "Intuitive digital experience analytics that provide a complete picture so you can drive high-impact improvements.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e0a26e95fdda24bfe5b98_fs-monogram-square-rev-png.png",
   "Category": "analytics",
   "URL": "https://www.fullstory.com/",
   "Price": "Paid",
   "Keywords": "FullStory,",
   "LikedBy" : []
   
 },
 {
   "Name": "Geckoboard",
   "Description": "With Geckoboard, you can build dashboards for your company goals, product metrics, marketing initiatives, sales, customer support and more. It's a data visualization platform that allows businesses to display key metrics and performance data in real-time, all in one place. It pulls data from various sources, including Google Analytics, Salesforce, and Zendesk, and displays the information in a range of visually engaging dashboards and widgets. Geckoboard's dashboarding capabilities make it easy for businesses to monitor and analyze their performance data, track progress towards goals, and communicate important metrics to their teams. It also offers features such as alerts, goal setting, and user permissions, making it a useful tool for teams of any size and across different industries. Overall, its a powerful and user-friendly platform that helps businesses stay on top of their performance data and make more informed decisions.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e78d64440e3e95e82a_uc.png",
   "Category": "analytics",
   "URL": "https://www.geckoboard.com/",
   "Price": "",
   "Keywords": "Geckoboard,Data visualization, Real-time dashboards, Business intelligence, Performance tracking, Metric monitoring",
   "LikedBy" : []
   
 },
 {
   "Name": "Gleam",
   "Description": "Gleam is an online platform used to build interactive social media promotions, contests, giveaways, and campaigns. It is designed to help businesses and brands boost their customer engagement by offering rewards in exchange for user actions like watching a video, visiting a website, downloading an app, and more. With it , businesses can easily create and manage multiple campaigns, track their performance, and measure the success of their promotions.The team behind this platform have done a great job making it so simple to setup a viral campaign in just minutes.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a4891895d868da004b0b_uc.jpeg",
   "Category": "sales",
   "URL": "https://gleam.io/",
   "Price": "",
   "Keywords": "Gleam,Social Media Promotions, Promotions, Campaigns, Performance Tracking, Customer Engagement",
   "LikedBy" : []
   
 },
 {
   "Name": "Gliacloud",
   "Description": "Gliacloud is a content marketing tool that helps businesses to create, optimize and distribute marketing content more efficiently. The platform uses natural language processing (NLP) and machine learning algorithms to analyze content and provide recommendations for improving its effectiveness. Gliacloud features to help by Content Creation where it provides users with a suite of tools to help them create high-quality content, such as a content editor, a keyword suggestion tool, and a plagiarism checker, Content Optimization it uses natural language processing (NLP) algorithms to analyze content and provide recommendations for optimizing it. This includes recommendations for improving the structure, readability, and tone of the content, Content distribution it gives users the tools to help them distribute their content more effectively, such as social media scheduling, email marketing, and content syndication. when it comes to. Analytics The platform gives users detailed analytics and insights into their content performance, including metrics such as engagement, click-through rates, and conversions.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97d794a46b2f1877891b_uc.png",
   "Category": "createcontent",
   "URL": "https://www.gliacloud.com/en/",
   "Price": "",
   "Keywords": "Gliacloud,Content creation, Content optimization, AI-powered marketing, Marketing analytics",
   "LikedBy" : []
   
 },
 {
   "Name": "Glide Apps",
   "Description": "Build an app for your business in five minutes, for free, without writing any code & from a speadsheet.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614c2ad460b83d3b251891b6_glide.png",
   "Category": "nocode",
   "URL": "https://www.glideapps.com",
   "Price": "Free package",
   "Keywords": "Glide Apps,",
   "LikedBy" : []
   
 },
 {
   "Name": "Google Optimize",
   "Description": "Google Optimize is a tool for split-testing and experiments it allows you to test variants of web pages and see how they perform against an objective that you specify. Optimize monitors the results of your experiment and tells you which variant is the leader.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63e3c59210448a64ebd00e49_png-transparent-google-optimize-hd-logo.png",
   "Category": "analytics",
   "URL": "https://optimize.google.com/",
   "Price": "Freemium",
   "Keywords": "Google Optimize,",
   "LikedBy" : []
   
 },
 {
   "Name": "Groove",
   "Description": "Groove is simple helpdesk software to help deliver better customer experiences.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd3888e2beea_4vehL4fy_400x400.jpg",
   "Category": "analytics",
   "URL": "https://www.groovehq.com/",
   "Price": "",
   "Keywords": "Groove,",
   "LikedBy" : []
   
 },
 {
   "Name": "HawkAI",
   "Description": "HawkAI is a powerful platform that can help organizations of all sizes to improve their compliance and risk management processes, by providing a comprehensive view of the regulatory landscape, scoring risks, and providing alerts and notifications to enable proactive risk mitigation, in order to to help organizations improve their compliance and risk management processes HawkAI provides its features such as Data Integration with a wide range of data sources, including news feeds, regulatory databases, and social media, to provide a comprehensive view of the regulatory landscape, Risk Scoring uses advanced algorithms to analyze and score risks based on the likelihood and impact of non-compliance, allowing organizations to prioritize and focus their compliance efforts, Alerts and Notifications provides alerts and notifications to inform organizations of new or emerging compliance risks, enabling them to take immediate action to mitigate these risks, Compliance Workflow Management gives a comprehensive workflow management system that allows organizations to manage their compliance processes, including risk assessments, audits, and remediation, Analytics and Reporting provides detailed analytics and reporting features that allow organizations to track the performance of their compliance programs, including risk levels, compliance trends, and audit results",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97dbb36596161e706eb6_uc.png",
   "Category": "analytics",
   "URL": "https://hawk.ai/",
   "Price": "",
   "Keywords": "HawkAI,Compliance management, Risk scoring, Artificial intelligence, Workflow automation, Data integration",
   "LikedBy" : []
   
 },
 {
   "Name": "Hello Bar ",
   "Description": "If you've been in digital marketing long enough, you know Hello Bar is one of the classic CRO tools used for your website and App for collecting emails, Converting your website visitors into paying customers, Growing your email list & generating new leads. . Even still to this day, it's used by many bloggers, startups and entrepreneurs around the world.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63e3b0d6b1678a120cdde91e_hello-bar.webp",
   "Category": "analytics",
   "URL": "https://www.hellobar.com/",
   "Price": "Freemium",
   "Keywords": "Hello Bar ,",
   "LikedBy" : []
   
 },
 {
   "Name": "HelpScout",
   "Description": "HelpScout is a helpdesk invisible to customers, that helps companies deliver outstanding customer support.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd19f3e2beeb_67JLUCO__400x400.png",
   "Category": "analytics",
   "URL": "https://www.helpscout.com/",
   "Price": "",
   "Keywords": "HelpScout,",
   "LikedBy" : []
   
 },
 {
   "Name": "HeySummit",
   "Description": "HeySummit, this platform has it all. You can create dynamic landing pages, own branding and customisation, custom domains and a lot more, It offers a range of features to help organizers create successful events, including customizable landing pages, ticketing and registration, speaker management, sponsor management, and live streaming. The platform also provides analytics and reporting to help organizers track attendance and engagement metrics, and improve their events over time.You can run events whether pre-recorded or live, or even a mix of both. Also incorporate sponsor showcases, to live chat where attendees can ask questions to the speakers or panelists, or even run competitions/giveaways that requires those who attend to do something. However you want to replicate the in-person event experience, you can do online with this tool.Something that is highlighted on the site is the fact you can turn your events into evergreen content. Keep generating leads/registerations with already recorded sessions. Still have the features that drives engagement. Bolster up the experience by adding integrations.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e6a34b4e2c329fe147_uc.png",
   "Category": "community",
   "URL": "https://www.heysummit.com/",
   "Price": "",
   "Keywords": "HeySummit,Virtual events, Event management, Webinars, Online conferences, Attendee engagement",
   "LikedBy" : []
   
 },
 {
   "Name": "HootSuite",
   "Description": "Schedule and publish content to the right channels at the right time, track effectiveness in real time, and crank the volume on your top-performing content.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd5c5be2bee7_WoEdt9DE_400x400.jpg",
   "Category": "social-media",
   "URL": "https://hootsuite.com/",
   "Price": "Free package",
   "Keywords": "HootSuite,",
   "LikedBy" : []
   
 },
 {
   "Name": "Hopin",
   "Description": "This is the 'all-in-one' platform for hosting events virtually, whether it be conferences, workshops or networking events where attendees can learn, interact, and connect with people from anywhere in the world. However, it's not just for virtual events. You can use Hopin for hybrid, in-person and internal events.With hosting virtual events, this platform has you covered from registeration page creation, event 'stages' where you can share presentations with up to 100k viewers (insane to think about), and even have 'breakout' sessions, similar to the experience of in-person events. You can host videos on the platform, and see the analytics and engagement metrics.Of course llike you do at most conferences, engagement with the audience is key. So, you can create polls and quizzes based on presentations, time between speakers, panels or during intermissions. You can also run closed or open networking sessions, where attendees can speak one-on-one or to a group. The UX of this feature is pretty awesome.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e682c4d727723567c2_uc.webp",
   "Category": "community",
   "URL": "https://hopin.com/",
   "Price": "",
   "Keywords": "Hopin,Virtual events, Event management, Online conferences, Webinars, Networking",
   "LikedBy" : []
   
 },
 {
   "Name": "Hoppier",
   "Description": "Hoppier drives virtual event engagement by allowing event planners to issue smart digital Visa cards for attendees to spend freely on food and rewards they actually want sent by email in minutes. It simplifies and automates the procurement process for office snacks and beverages. It allows businesses to offer a range of snacks and beverages to their employees, without the need for manual ordering, inventory management, or distribution. Users can set up a snack and beverage budget, choose from a selection of curated products, and then invite employees to place orders from a customizable online store. Hoppier handles the rest, including inventory management, packaging, and delivery. Which make it a useful tool for businesses looking to offer a convenient and cost-effective employee perk that promotes workplace wellness and productivity.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e6bb37c75d2808b6ce_uc.png",
   "Category": "community",
   "URL": "https://www.hoppier.com/",
   "Price": "",
   "Keywords": "Hoppier,Office snacks, Beverage procurement, Employee wellness, Cost-effective, Inventory management",
   "LikedBy" : []
   
 },
 {
   "Name": "Hotjar",
   "Description": "Hotjar is a Growth Marketing tool for your website or App to measure and understand user behavior, optimize the customer journey and optimize user experience for conversions.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63e376e28b0658acffe68421_62c9db5f94890221ddd176b3.png",
   "Category": "analytics",
   "URL": "http://www.hotjar.com",
   "Price": "Freemium",
   "Keywords": "Hotjar,",
   "LikedBy" : []
   
 },
 {
   "Name": "Hubspot",
   "Description": "CRM platform",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e0ab7f290414266233167_guidelines_the-sprocket.svg",
   "Category": "analytics",
   "URL": "https://www.hubspot.com",
   "Price": "Free package",
   "Keywords": "Hubspot,",
   "LikedBy" : []
   
 },
 {
   "Name": "iDevAffiliate",
   "Description": "iDevAffiliate is affiliate software designed for you to operate your own affiliate program. ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd6d7ae2beda_8EMUYPgB_400x400.jpg",
   "Category": "createcontent",
   "URL": "https://www.idevdirect.com/",
   "Price": "Free",
   "Keywords": "iDevAffiliate,",
   "LikedBy" : []
   
 },
 {
   "Name": "IFTTT",
   "Description": "IF This Then That helps your apps and devices work together in new ways.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bda724e2bf01_IFTTT.jpg",
   "Category": "automate",
   "URL": "https://ifttt.com/",
   "Price": "Free package",
   "Keywords": "IFTTT,",
   "LikedBy" : []
   
 },
 {
   "Name": "IFTTT",
   "Description": "IFTTT (If This Then That) is a free web service and mobile app that helps users automate web-based tasks and boost productivity by making popular apps work together, it connects various developers devices, services and apps to create \"applets\" that can be used to automate a variety of tasks, including social media monitoring, tracking news coverage and sending notifications. It is used to simplify many processes and save time with productivity apps. There are over 700 possible integrations, you can also download apps from the Apple and Google Play Store so you can access and monitor your automations from anywhere.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a48eb2b2b10e2d842d30_uc.png",
   "Category": "automate",
   "URL": "https://ifttt.com/",
   "Price": "Freemium",
   "Keywords": "IFTTT,Web Service, Automate, Tasks, Integrations, Enhanced Accessibility",
   "LikedBy" : []
   
 },
 {
   "Name": "iMovie",
   "Description": "iMovie is a free video editing application made by Apple for the Mac, it is designed to be accessible to users with little or no video editing experience so you can easily create pro-looking videos within the editor which is very easy to pick up. They've done a good job making it user friendly. It enables you to add extra special effects, high-definition filters and soundtracks to your videos in a matter of clicks. The cool part of editing with iMovie is the ability to also make videos on your iPhone which makes it really useful for creating and uploading videos to your social media channels.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a485e202f2805d8e0ec5_uc.png",
   "Category": "createcontent",
   "URL": "https://www.apple.com/imovie/",
   "Price": "Free",
   "Keywords": "iMovie,Video Editing, Video Creation, Content Creation, User Friendly, Social Media",
   "LikedBy" : []
   
 },
 {
   "Name": "Imported item 51",
   "Description": "",
   "Icon": "",
   "Category": "",
   "URL": "",
   "Price": "",
   "Keywords": "Imported item 51,",
   "LikedBy" : []
   
 },
 {
   "Name": "Inspectlet",
   "Description": "Inspectlet is a tool that can be used on Chrome extension (only) really takes your conversion rate optimization game to the next level - perfect for measuring onboarding, optimize conversion rates, increase activation, as well as retention. See how users engage with your product early on so you can optimize your funnel.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63e386d55ad4cb02410985c2_0fdbcc2ace01f28883d22d3c99e832eab32ec1ec-199x200.png",
   "Category": "analytics",
   "URL": "https://www.inspectlet.com/",
   "Price": "Freemium",
   "Keywords": "Inspectlet,",
   "LikedBy" : []
   
 },
 {
   "Name": "Instapage",
   "Description": "Instapage is a powerful tool for creating high-converting landing pages and optimizing for lead generation and customer acquisition. It's ideal for businesses and marketers looking to improve their conversion rates and create a more personalized user experience. With the personalisation feature, you can create dynamic landing pages so you can increase the relevancy of your ads and increase conversions through a 1:1 ad experience - you can do this with keywords, demographics and firmographics. Build landing pages fast with conversion-focused layouts which have been battle-tested. You can also collaborate with other team members within the same visual editor for design and copy feedback.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97df93ec21cf765ddcf1_uc.png",
   "Category": "nocode",
   "URL": "https://instapage.com/",
   "Price": "",
   "Keywords": "Instapage,Landing Page Builder, Split Testing, Optimization, Lead Generation",
   "LikedBy" : []
   
 },
 {
   "Name": "Integromat",
   "Description": "Connect apps and automate workflows in a few clicks",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/6142e931a500512cb842ee39_integromat-logo-F4F72412FA-seeklogo.com.png",
   "Category": "automate",
   "URL": "https://www.integromat.com/?pc=techbible",
   "Price": "Free package",
   "Keywords": "Integromat,",
   "LikedBy" : []
   
 },
 {
   "Name": "Intercom",
   "Description": "Intercom gives you customer messaging apps for sales, marketing, & support, connected on one platform. ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd3d74e2beec_qmwr6vjg_400x400.png",
   "Category": "nocode",
   "URL": "https://www.intercom.com/",
   "Price": "Freemium",
   "Keywords": "Intercom,",
   "LikedBy" : []
   
 },
 {
   "Name": "Investor List ",
   "Description": "No warm intro investor list",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/61ee811e937e8a5074a6d3d6_AirTable.png",
   "Category": "investment",
   "URL": "https://airtable.com/shrsDIW1FMuA5cI9P/tblaahhCCc2v0065Q/viwdm9nLc4Aj3sHJO?blocks=hide",
   "Price": "Free",
   "Keywords": "Investor List ,",
   "LikedBy" : []
   
 },
 {
   "Name": "InVideo",
   "Description": "InVideo is a video editing platform that allows users to create professional-quality videos using a simple drag-and-drop interface. It provides a wide range of tools and features with 4000+ custom-built templates, 1 million+ royalty-free images and videos clips to help users create engaging and visually appealing videos for marketing, social media, or other purposes. It also allows users to add voiceover and includes automated text-to-speech functionality. All in All InVideo is a powerful video editing platform that offers a range of tools and features to help users create professional-quality videos quickly and easily, without needing to have extensive video editing experience.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97d72659b0d9d57e4325_uc.webp",
   "Category": "createcontent",
   "URL": "https://invideo.io/",
   "Price": "",
   "Keywords": "InVideo,Video editing, Drag-and-drop interface, Customizable templates, Collaboration, Automation",
   "LikedBy" : []
   
 },
 {
   "Name": "Invision",
   "Description": "InVision is a digital product design platform that allows users to create, collaborate, and share interactive designs, prototypes, and animations for web and mobile applications. The platform offers a range of tools and features that enable designers, developers, and other stakeholders to work together throughout the entire design process, from ideation to production. These tools include a drag-and-drop interface for creating user interfaces, built-in design libraries, and integrations with other design and development tools. It also offers collaboration and feedback features that allow users to share their designs with team members and stakeholders, collect feedback and comments, and track changes and revisions. Additionally, the platform offers advanced prototyping and animation tools that enable designers to create interactive and dynamic user experiences. InVision is a powerful platform for digital product design that helps teams to create high-quality, user-centered designs and collaborate more efficiently throughout the design process.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e806c5224571588af4_uc.png",
   "Category": "collaboration",
   "URL": "https://www.invisionapp.com/",
   "Price": "",
   "Keywords": "Invision,Digital product design, Prototyping, Collaboration, User experience, Design feedback.",
   "LikedBy" : []
   
 },
 {
   "Name": "Involve.me",
   "Description": "No-code content builder that helps increase audience engagement and conversion through interactive quizzes, smart forms, surveys, web calculators, and payment pages for your website.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/617977f814125429ff5d678e_involve_me_ICON.png",
   "Category": "nocode",
   "URL": "https://bit.ly/3b97pIm",
   "Price": "Free package",
   "Keywords": "Involve.me,",
   "LikedBy" : []
   
 },
 {
   "Name": "Jasper",
   "Description": "Jasper is an AI-powered writing tool that helps teams create high-quality content more efficiently. It offers a range of features to help teams generate content for a variety of use cases, including ad copy, product descriptions, and blog articles. Jasper uses natural language processing (NLP) and machine learning algorithms to analyze user input and generate high-quality, human-like language that matches the user's intended style and tone. It also provides collaboration tools that allow team members to work together on content creation, provide feedback, and track changes in real-time. In addition, it offers workflow automation tools that allow teams to streamline their content creation process and improve efficiency, such as batch processing and bulk upload features.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef87fac4016e5907c6dbfb_uc.png",
   "Category": "createcontent",
   "URL": "https://www.jasper.ai/",
   "Price": "",
   "Keywords": "Jasper,AI writing, Natural language processing, Team collaboration, Workflow automation, Content generation",
   "LikedBy" : []
   
 },
 {
   "Name": "Jekyll",
   "Description": "Jekyll is a simple, blog-aware, static site generator for personal, project, or organization sites.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bda483e2be50_ad968c1615d956e800fa36494314f48c_400x400.jpeg",
   "Category": "nocode",
   "URL": "https://jekyllrb.com/",
   "Price": "Free",
   "Keywords": "Jekyll,",
   "LikedBy" : []
   
 },
 {
   "Name": "Jotform",
   "Description": "JotForm is an online form building tool that helps you create and publish forms, and collect responses.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd21dbe2be59_PXRhTOCB_400x400.jpg",
   "Category": "community",
   "URL": "https://www.jotform.com/",
   "Price": "Free",
   "Keywords": "Jotform,",
   "LikedBy" : []
   
 },
 {
   "Name": "Kajabi",
   "Description": "Kajabi is an all-in-one business platform designed to help organizations build websites and landing pages, streamline payments, marketing automation, create courses and see analytics. It's Features include marketing emails, ready-to-use templates, advanced automation, chat support, code editor, and webinars and events, you can even sell premium content such as memberships, access to communities, podcasts, newsletters i think you're getting the picture now because Kajabi Cares about your online business as much as you do.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a4884d9eb3305a37febd_uc.png",
   "Category": "sales",
   "URL": "https://kajabi.com/",
   "Price": "",
   "Keywords": "Kajabi,Online Learning,  Education, Digital Products, Online Courses,  Membership Sites",
   "LikedBy" : []
   
 },
 {
   "Name": "Klaviyo",
   "Description": "Highly targeted, Email & SMS marketing platform for E-commerce brands",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e0b486495cb1a10bd113e_klaviyo_logo.png",
   "Category": "sales",
   "URL": "https://www.klaviyo.com",
   "Price": "Paid",
   "Keywords": "Klaviyo,",
   "LikedBy" : []
   
 },
 {
   "Name": "Klipfolio",
   "Description": "Klipfolio is a data analytics and visualization platform that allows businesses and individuals to connect to various data sources, such as spreadsheets, databases, and web services, and create interactive dashboards and reports to track and analyze their key performance indicators (KPIs) in real time. It provides users with a wide range of pre-built data connectors, visualizations, and templates, as well as a drag-and-drop interface that enables users to create customized dashboards and reports without the need for programming or advanced technical skills. Klipfolio also offers features such as data transformation, data blending, and alerts, which help users to organize, clean, and transform their data, and to receive notifications when specific KPIs reach certain thresholds. Setting up dashboards and connecting sources literally takes minutes. The User Interface (UI) looks awesome, visually appealing and easy for anyone who isn't strong in analytics to pick up trends.View performance over time, filter by days, do period comparisons, dive deep into location, sources of traffic and so much more, all within the dashboard. Overall, it's a powerful tool for businesses and individuals looking to gain insights and make data-driven decisions based on their data.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e71a78435ac2653c71_uc.webp",
   "Category": "analytics",
   "URL": "https://www.klipfolio.com/",
   "Price": "",
   "Keywords": "Klipfolio,Dashboard, Data analytics, Visualization, Key Performance Indicators (KPIs), Cloud-based",
   "LikedBy" : []
   
 },
 {
   "Name": "Landbot",
   "Description": "Intuitive No-code Chatbot Builder, to help you convert leads, capture data, and personalize client journeys in real-time.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614708f55c97341e5e1c3751_5f4f546c3086fe84b9e7ca6e_symbol.png",
   "Category": "nocode",
   "URL": "https://landbot.grsm.io/ghitaelhaitmyelhaitmy7354",
   "Price": "Paid with Free Trial",
   "Keywords": "Landbot,",
   "LikedBy" : []
   
 },
 {
   "Name": "Lander",
   "Description": "Lander is a landing page building software that enables Internet Marketers to quickly build, customize and publish pages for marketing campaigns. Choose from a variety of templates or build your very own template for your needs. Whether you are marketing for an e-commerce store, lead generation, webinars, ebooks or email marketing - we've got a template for you. it offers also a Split testing and Facebook landing pages with all plans. Additional features include Dynamic Text Replacement, auto-fill forms, integrations with Marketo, Salesforce, Mailchimp and much more.Like most of the other builders, you can easily build pages within Lander using drag-and-drop elements you can test up to 3 pages at once to see which one performs.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e244accd80e609ef5d_uc.webp",
   "Category": "nocode",
   "URL": "https://landerapp.com/",
   "Price": "",
   "Keywords": "Lander,Landing page builder, Software, Marketing campaigns, Templates, Integrations",
   "LikedBy" : []
   
 },
 {
   "Name": "Later",
   "Description": "Optimize your social content, drive traffic, and grow your business with a visual marketing platform",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e020430de98585d51f478_latergramme-squarelogo-1475789956417.png",
   "Category": "social-media",
   "URL": "https://later.grsm.io/o4fm91zycbrg",
   "Price": "Free package",
   "Keywords": "Later,",
   "LikedBy" : []
   
 },
 {
   "Name": "Lead Pages",
   "Description": "Leadpages is a powerful tool for creating high-converting landing pages and pop-ups, and optimizing for lead generation and customer acquisition. It's ideal for businesses and marketers looking to improve their conversion rates and grow their email lists. The visual editor is awesome and really fast. Lots of customisation options available and all pages you build look great on mobile which is most important for paid ad campaigns. You can integrate one of your preferred email marketing tools, as well as setup checkouts and payment gateways, so you can sell digital products and more. There are a ton of other integrations like Google Analytics, Calendly and more. There are also great templates on offer to speed up landing page development.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97de13534f0cff7ae2a7_uc.webp",
   "Category": "nocode",
   "URL": "https://www.leadpages.com/",
   "Price": "",
   "Keywords": "Lead Pages,Landing Page Builder, Conversion Optimization, Pop-up Forms, Split Testing, Analytics",
   "LikedBy" : []
   
 },
 {
   "Name": "Leadoo",
   "Description": "Famous for their banner bots, this tool allows you to convert more qualified leads from your existing website traffic. Increase sales and deliver a better customer experience.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e13fdff782c019dd0c3ec_logo-Square-HiRes-Transparency.png",
   "Category": "sales",
   "URL": "https://leadoo.com",
   "Price": "Paid",
   "Keywords": "Leadoo,",
   "LikedBy" : []
   
 },
 {
   "Name": "LearnDash",
   "Description": "Used by some of the biggest brands globally in the tech and marketing industry, LearnDash helps you build awesome user-friendly and appealing course experiences for students and customers.Integration with your Wordpress is a 1-click install, import into your site and then you're on your way. This tool has all the important features you need  like a drag and drop course creation builder, create quizzes, setup badges for gamification and certificates, leaderboards, assignments and loads more.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a48985891c8a100b8d2d_uc.png",
   "Category": "createcontent",
   "URL": "https://www.learndash.com/",
   "Price": "",
   "Keywords": "LearnDash,E-Learning, Course Creation, Digital Learning, Online Courses",
   "LikedBy" : []
   
 },
 {
   "Name": "LibreStock",
   "Description": "LibreStock finds the best free photos from the top stock sites - all photos are free for personal & commercial.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd61c3e2bedf_n-VN2v0__400x400.jpg",
   "Category": "createcontent",
   "URL": "https://librestock.com/",
   "Price": "Paid with Free Trial",
   "Keywords": "LibreStock,",
   "LikedBy" : []
   
 },
 {
   "Name": "Lightworks",
   "Description": "Lightworks is a powerful, professional editing software that is used by filmmakers, editors, and even YouTubers. It is designed to be user-friendly, efficient, and powerful, while offering an array of features to help you make the best possible videos. It has a wide range of features including a fully-featured timeline editor, real-time previewing, color correction, and an array of effects, as well as support for a variety of formats. Its also integrated with a wide range of tools, such as Adobe Creative Suite, Final Cut Pro, and Pro Tools, allowing you to import and export projects from other popular software with ease and give you the most professional look and feel.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a4870058f3c7e1f3b139_uc.png",
   "Category": "createcontent",
   "URL": "https://lwks.com/",
   "Price": "Freemium",
   "Keywords": "Lightworks,Editing Software, User Friendly, Integration, Video Editing , Lighting Effects",
   "LikedBy" : []
   
 },
 {
   "Name": "LinkedinHacker",
   "Description": "Prequalified leads bundle, 10 per week per ��",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e2458899d7835416838b5_LinkedIn_logo_initials.png",
   "Category": "sales",
   "URL": "https://www.linkedhacker.com/uk",
   "Price": "Paid",
   "Keywords": "LinkedinHacker,",
   "LikedBy" : []
   
 },
 {
   "Name": "LinkMink",
   "Description": "LinkMink is easy affiliate tracking and management for businesses using Stripe.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bda3f9e2bef9_linkmink.png",
   "Category": "createcontent",
   "URL": "https://linkmink.com/",
   "Price": "",
   "Keywords": "LinkMink,",
   "LikedBy" : []
   
 },
 {
   "Name": "Looker Studio",
   "Description": "Formerly known as Google Data Studio, Looker Studio is a data visualization platform that makes reports easier to create and understand. It lets you bring in sets of data from various places into one location so you can turn that information into an easy-to-understand report, that you can use to analyze, present marketing results and make better decisions based on it. It's a free friendly user Business Intelligence (BI) tool, that allows you to transform raw data into strategic information for companies through data visualization, it also gathers metrics and indicators that support decision and strategy making, so that companies take fewer risks and achieve their goals.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a483c2f0159cfa7a3e8d_uc.png",
   "Category": "analytics",
   "URL": "https://support.google.com/looker-studio/answer/6283323?hl=en",
   "Price": "",
   "Keywords": "Looker Studio,Data Visualization, Dashboards, Reports, Analytics, Business Intelligence",
   "LikedBy" : []
   
 },
 {
   "Name": "Loom",
   "Description": "Loom is a platform that allows you to make and share quick videos capturing your screen or webcam.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd7b3be2be9a_nsrbnkc9_400x400.jpg",
   "Category": "collaboration",
   "URL": "https://www.loom.com/",
   "Price": "Free package",
   "Keywords": "Loom,",
   "LikedBy" : []
   
 },
 {
   "Name": "Lumen 5",
   "Description": "Lumen 5 is a video creation platform that uses artificial intelligence and machine learning to help users create engaging videos quickly and easily it is designed for brands and businesses to produce engaging video content for marketing, social media, social posts, stories, ads and other purposes also to be user-friendly and offers a range of features and tools to help users create high-quality videos the goal is to enable anyone without training or experience to easily create amazing videos in minutes.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97d8cfa2364681e15892_uc.png",
   "Category": "createcontent",
   "URL": "https://lumen5.com/",
   "Price": "",
   "Keywords": "Lumen 5,Customizable Templates, Automated Video Creation, Image and video library, Brand management",
   "LikedBy" : []
   
 },
 {
   "Name": "Lusha",
   "Description": "Locate accurate B2B contact and company details, shorten their sales discovery and close more deals.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e148030de986b6f5262af_lusha.png",
   "Category": "sales",
   "URL": "https://www.lusha.com",
   "Price": "Paid",
   "Keywords": "Lusha,",
   "LikedBy" : []
   
 },
 {
   "Name": "Madgicx",
   "Description": "Madgicx brings all advertising technology solutions into a single advertising platform. Instead of having separate solutions for bid testing, audience creation, bidding/budget optimization, automation, and strategy, you get one simple, integrated platform that is easy to use and manage. alongside a variety of tools to optimize their advertising with Advertising Automation, Predictive Analytics, AI-powered Optimization, Audience Segmentation, Reporting and Analytics, content management, conversion tracking, customer targeting and social media monitoring and campaign management with this tool businesses of all sizes can optimize their advertising campaigns on Facebook and Google and improve their ROI.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97dba8b166c6b427497f_uc.png",
   "Category": "automate",
   "URL": "https://madgicx.com/",
   "Price": "",
   "Keywords": "Madgicx,Advertising automation,Predictive analytics,AI-powered optimization, Audience segmentation, Reporting and analytics",
   "LikedBy" : []
   
 },
 {
   "Name": "Mailchimp",
   "Description": "Mailchimp has email marketing, ads, landing pages, and CRM tools to grow your business on your terms.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd9db0e2be4c_GXmN8hMr_400x400.jpg",
   "Category": "use-ai",
   "URL": "https://mailchimp.com/",
   "Price": "Free package",
   "Keywords": "Mailchimp,",
   "LikedBy" : []
   
 },
 {
   "Name": "MailerLite",
   "Description": "Create advanced email marketing campaigns with features like automation, landing pages and surveys.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd4e2ce2be53_K9MF0Okb_400x400.jpg",
   "Category": "use-ai",
   "URL": "https://www.mailerlite.com/",
   "Price": "Free",
   "Keywords": "MailerLite,",
   "LikedBy" : []
   
 },
 {
   "Name": "Mailjet",
   "Description": "Mailjet is an email marketing and automation platform that provides tools for designing, sending, and tracking email campaigns, as well as managing contact lists and analyzing email marketing metrics. It also offers features such as transactional email sending and email API integration. with the goal to simplify email delivery and collaboration for the users so that they can focus on growing their businesses. the tools makes it easy for SMEs and enterprises alike to attract, engage and build relationships with their customers via email.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97dab365964411706e9d_uc.png",
   "Category": "sales",
   "URL": "https://www.mailjet.com/",
   "Price": "",
   "Keywords": "Mailjet,Email marketing, Marketing automation, Email campaigns, Contact management, Transactional email.",
   "LikedBy" : []
   
 },
 {
   "Name": "Make",
   "Description": "Make is a visual platform that lets you design, build, and automate anything from simple tasks to complex workflows, it enables users to connect their web apps, application programming interface (APIs) and cloud services to create and process data with ease. It combines the abilities of integrations and automation to make custom integrations, automations, and workflows that help users streamline their digital processes and gives the ability to automate repetitive tasks, data flows, and get more done in less time. You get to see the details of execution of every task, use functions, routers, filters, error handling and so much more. there is also 1000's of templates to choose from.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a48a6ff56479ebfaa728_uc.png",
   "Category": "automate",
   "URL": "https://www.make.com/en",
   "Price": "Freemium",
   "Keywords": "Make,Design, Automate, Workflows, Integrations",
   "LikedBy" : []
   
 },
 {
   "Name": "Markopolo",
   "Description": "One Platform for your Facebook, Instagram & Google ads for better results ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614df58a8befc983c23506d4_Marketeer-logo-2-main-transparent.png",
   "Category": "social-media",
   "URL": "https://www.markopolo.ai",
   "Price": "Paid",
   "Keywords": "Markopolo,",
   "LikedBy" : []
   
 },
 {
   "Name": "Marvel App",
   "Description": "Marvel App is a design and prototyping platform that allows designers and teams to create and share interactive designs, wireframes, and prototypes for web and mobile applications, it provides users with a range of tools and features that enable them to design and prototype their user interfaces, including a drag-and-drop interface for creating and arranging design elements, a library of pre-built design components, and integrations with other design and development tools. The platform also offers collaboration and feedback features that allow users to share their designs with team members and stakeholders, collect feedback and comments, and track changes and revisions. Additionally, it offers advanced prototyping features that enable designers to create interactive and dynamic user experiences. it's a powerful tool for digital product design that helps teams to create high-quality, user-centered designs and collaborate more efficiently throughout the design process.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e844accddea009efa2_uc.png",
   "Category": "collaboration",
   "URL": "https://marvelapp.com/",
   "Price": "",
   "Keywords": "Marvel App,Design prototyping, User interface design, Collaboration, Feedback, Interactive design.",
   "LikedBy" : []
   
 },
 {
   "Name": "MeetEdgar",
   "Description": "Get more out of social media with Edgar! Schedule, share, and recycle the posts you want, when you want.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bde44fe2bee8_FY278yPF_400x400.jpg",
   "Category": "social-media",
   "URL": "https://meetedgar.com/",
   "Price": "",
   "Keywords": "MeetEdgar,",
   "LikedBy" : []
   
 },
 {
   "Name": "Milanote",
   "Description": "An easy to use tool for creatives to turn ideas and projects into visual boards",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614c3040db6026840a171b10_016vhyaOYbADJ3byKwUQlVW-13.1609877160.fit_lim.size_1200x630.png",
   "Category": "collaboration",
   "URL": "https://milanote.com",
   "Price": "Freemium",
   "Keywords": "Milanote,",
   "LikedBy" : []
   
 },
 {
   "Name": "Milkshake",
   "Description": "",
   "Icon": "",
   "Category": "",
   "URL": "https://milkshake.app/",
   "Price": "",
   "Keywords": "Milkshake,",
   "LikedBy" : []
   
 },
 {
   "Name": "Miro",
   "Description": "Online collaborative whiteboard platform",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614c2efef17d307a18ff9be3_Miro-Logo-Square-Insight-Platforms.png",
   "Category": "collaboration",
   "URL": "https://miro.com",
   "Price": "Free package",
   "Keywords": "Miro,",
   "LikedBy" : []
   
 },
 {
   "Name": "Mixmax",
   "Description": "Mixmax is -a feature-rich email app that extends Gmail's functionality and delivers enhanced productivity.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bdcdb2e2bef3_oAwdmSUx_400x400.png",
   "Category": "collaboration",
   "URL": "https://mixmax.com/",
   "Price": "Free package",
   "Keywords": "Mixmax,",
   "LikedBy" : []
   
 },
 {
   "Name": "Mixpanel ",
   "Description": "Monitor all of your product's key performance indicators in one place. Self-serve product analytics to help you convert, engage, and retain more users.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/619cae973fb69276bfa2d51b_mixpanel-squarelogo-1606246611862.png",
   "Category": "analytics",
   "URL": "https://mixpanel.com",
   "Price": "Free",
   "Keywords": "Mixpanel ,",
   "LikedBy" : []
   
 },
 {
   "Name": "Moosend",
   "Description": "Moosend is an email marketing platform that allows businesses and organizations to create, send, and track email campaigns. It offers various features, including drag-and-drop email editor, list segmentation, Split testing, landing page builder, automation workflows, real-time performance tracking, and integrations with various third-party tools. Moosend aims to help businesses create personalized email campaigns that engage their audience and drive conversions.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97d9aafa306bafefff13_uc.webp",
   "Category": "sales",
   "URL": "https://moosend.com/",
   "Price": "",
   "Keywords": "Moosend,Email marketing, Marketing automation, Landing page builder, Split testing, Real-time analytics",
   "LikedBy" : []
   
 },
 {
   "Name": "Moqups",
   "Description": "Moqups is a visual collaboration software designed to help organizations create and validate functional prototypes for designing websites or mobile applications, everything from designing prototypes and mockups to planning ideas and projects to interactive prototyping and collaboration this is very much your end-to-end suite. On this platform teams can utilize whiteboard functionality to collaborate on diagrams, wireframes, and mockups, its diagramming tools allows designers to develop sitemaps, storyboards or flowcharts. In the editor you'll be able to find pre-built components, guidelines and more to help you create prototypes fast.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a482897bcb5ead32b605_uc.png",
   "Category": "collaboration",
   "URL": "https://moqups.com/",
   "Price": "",
   "Keywords": "Moqups,Collaboration, Prototypes, Design, Mockups,",
   "LikedBy" : []
   
 },
 {
   "Name": "Mouselfow",
   "Description": "Record all your website visitors' sessions. Heatmaps for all your pages generated automatically. Find your website problems quickly with our Friction Score.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e0985ade774943be1cc7f_171-1718615_design-element-mouseflow-logo.png.jpeg",
   "Category": "analytics",
   "URL": "https://mouseflow.com",
   "Price": "Free package",
   "Keywords": "Mouselfow,",
   "LikedBy" : []
   
 },
 {
   "Name": "Muckrack",
   "Description": "Public relations software. Easily search for journalists, monitor news, and build reports.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e249f8801b14bba403835_1519863856739.jpeg",
   "Category": "find-influencers",
   "URL": "https://muckrack.com",
   "Price": "Paid",
   "Keywords": "Muckrack,",
   "LikedBy" : []
   
 },
 {
   "Name": "Muut",
   "Description": "Muut gives you forums, commenting and messaging right on your site. Unlimited posts and users, for free.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd20d4e2be56_5BVrtUp__400x400.png",
   "Category": "community",
   "URL": "https://muut.com/",
   "Price": "",
   "Keywords": "Muut,",
   "LikedBy" : []
   
 },
 {
   "Name": "Neontools.io",
   "Description": "The essential marketing tools for your business in one place. Tools include: Instagram��������������������������� audits, Hasht",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e02aff3aa5e64a3823c42_neontools-1.png",
   "Category": "social-media",
   "URL": "https://neontools.io",
   "Price": "Free",
   "Keywords": "Neontools.io,",
   "LikedBy" : []
   
 },
 {
   "Name": "NFT Scoring",
   "Description": "Discover and�������������",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/61c9cc0b04f240e8101edc0b_61788cc0faa532cc5b8957b4_nftscoring-logo-p-500.png",
   "Category": "web-3-0",
   "URL": "https://nftscoring.com/",
   "Price": "Free",
   "Keywords": "NFT Scoring,",
   "LikedBy" : []
   
 },
 {
   "Name": "Ocoya",
   "Description": "Canva+Hootsuite+ CopyAI into one. A marketing platform to help you run and analyse your campaigns in one place.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614c553df9a6e62c3e995e31_60f060d287535b78943bc7fc_logo.svg",
   "Category": "social-media",
   "URL": "https://www.ocoya.net/?via=techbible",
   "Price": "Paid with Free Trial",
   "Keywords": "Ocoya,",
   "LikedBy" : []
   
 },
 {
   "Name": "Octoboard",
   "Description": "Octoboard is an all-in-one reporting tool with multiple capabilities, which assists marketing agencies with managing processes for client reporting, scheduling, and advertising. Including its features you'll be able to find custom branding, user management, campaign monitoring, predefined templates, and conversion tracking. you can sync all your marketing metrics, financial numbers, sales figures, web analytics and more into a user interface friendly dashboards.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a48371afc2826f4f6287_uc.png",
   "Category": "analytics",
   "URL": "https://www.octoboard.com/",
   "Price": "",
   "Keywords": "Octoboard,Reporting, Managing, Visual analytics, Conversion tracking",
   "LikedBy" : []
   
 },
 {
   "Name": "Omnicourse",
   "Description": "",
   "Icon": "",
   "Category": "",
   "URL": "",
   "Price": "",
   "Keywords": "Omnicourse,",
   "LikedBy" : []
   
 },
 {
   "Name": "OnlineJobs",
   "Description": "Job Board For Virtual Workers In The Philippines",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e255958c1542f604a0ac2_oj-logo.png",
   "Category": "hire-talent",
   "URL": "https://www.onlinejobs.ph/",
   "Price": "Paid",
   "Keywords": "OnlineJobs,",
   "LikedBy" : []
   
 },
 {
   "Name": "Opensea",
   "Description": "NFT marketplace",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/61c9cd2493dac1565c5c5150_opensea.svg",
   "Category": "web-3-0",
   "URL": "https://opensea.io",
   "Price": "Freemium",
   "Keywords": "Opensea,",
   "LikedBy" : []
   
 },
 {
   "Name": "Openshot",
   "Description": "OpenShot is an open-source video editor for Windows, macOS, and Linux. It has a wide variety of features including trimming and slicing clips, adding titles, audio mixing, real-time previews, multi-layer timeline, audio mixing, 3D animations, and a library of royalty-free video clips. It also allows you to export your video in a variety of formats and resolutions, and it supports over 70+ languages.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a48759c178284d9d92fb_uc.png",
   "Category": "createcontent",
   "URL": "https://www.openshot.org/",
   "Price": "Free",
   "Keywords": "Openshot,Video Editing, Open Source Software, Video Production, Animation, Video Effects",
   "LikedBy" : []
   
 },
 {
   "Name": "OpenVC",
   "Description": "OpenVC is an open resource (think Wikipedia) where VCs can claim their investment thesis. By doing so, VCs receive less spam from clueless founders. They also drive highly-qualified deal flow. In return, it makes life easier for founders (yes, it matters).",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/61ee80393b9920056058e84e_android-icon-192x192.png",
   "Category": "investment",
   "URL": "https://www.openvc.app",
   "Price": "Free",
   "Keywords": "OpenVC,",
   "LikedBy" : []
   
 },
 {
   "Name": "Optimizely",
   "Description": "Optimizely is a digital experience platform that can be used in both your website and App and that helps you create amazing customer experiences with the right web pages, at the right time, for the right people.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63e38bc8c28650e549bd11dd_Optimizely_Logo.png",
   "Category": "analytics",
   "URL": "https://www.optimizely.com/",
   "Price": "",
   "Keywords": "Optimizely,",
   "LikedBy" : []
   
 },
 {
   "Name": "Outseta ",
   "Description": "Payments, authentication, CRM, email���������������������������it's all here. Outseta gives no-code creators the ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/6235be90036f3b0d4edf5727_0-logo-kb.png",
   "Category": "community",
   "URL": "http://www.outseta.com/?via=ghita",
   "Price": "Freemium",
   "Keywords": "Outseta ,",
   "LikedBy" : []
   
 },
 {
   "Name": "Paper.xyz ",
   "Description": "Grow your customer base with a checkout flow that accepts credit cards and onboards users without wallets Get access",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/6235ce4e193c997296c7903a_paper-logo-icon.svg",
   "Category": "web-3-0",
   "URL": "https://paper.xyz",
   "Price": "Freemium",
   "Keywords": "Paper.xyz ,",
   "LikedBy" : []
   
 },
 {
   "Name": "Paperform",
   "Description": "Paperform is an online form building platform that allows users to create custom forms and surveys quickly and easily. It offers a variety of features, including drag-and-drop editing, a built-in analytics system, and the ability to embed forms into websites or share them through email and social media, it can also be used for a wide range of purposes, such as collecting contact information, collecting payments, conducting surveys and polls. With its easy-to-use interface anyone at any skill level can work with it as it is a simple way to collect data.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a48908c46d06f55ab212_uc.png",
   "Category": "analytics",
   "URL": "https://paperform.co/",
   "Price": "",
   "Keywords": "Paperform,Form Building, Custom Forms, Analytics, Data collection, Payment Collection",
   "LikedBy" : []
   
 },
 {
   "Name": "Pathwright",
   "Description": "Pathwright is an all-in-one design, learning, and teaching platform for reinventing your world of education. The features it provides helps you design a custom experience for your students and customers, such as an online course creation platform, the ability to edit on any device, assessments creation, add your content, readings, setup scores, have discussions with students and loads more. You can even sell subscriptions to your course, accept payments, run member-cohorts, gifts and more.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a488897bcb2e4a32b63c_uc.webp",
   "Category": "createcontent",
   "URL": "https://www.pathwright.com/",
   "Price": "",
   "Keywords": "Pathwright,Action  Learning, Teaching Platform, Online Course, Course Edit,",
   "LikedBy" : []
   
 },
 {
   "Name": "Pendo",
   "Description": "Pendo is a product experience platform that helps businesses and software product teams improve user engagement and adoption. It provides a suite of tools to help businesses and product teams understand user behavior, collect feedback, and analyze data to improve user experiences and drive product growth, It offers a range of features such as in-app messaging, product usage analytics, user feedback, and guidance to help businesses and product teams create a more user-friendly product. With Pendo, teams can easily track user behavior and gain insights into how users interact with their product. Pendo's in-app messaging and guidance features enable teams to communicate with users directly within the product, providing relevant information and feedback when needed. Pendo is a useful tool for businesses and product teams looking to improve user engagement, retention, and product growth by delivering a better product experience.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e5a1bcee41b82ffe05_uc.png",
   "Category": "analytics",
   "URL": "https://www.pendo.io/",
   "Price": "",
   "Keywords": "Pendo,Product experience, User engagement,Product analytics,User feedback, In-app messaging",
   "LikedBy" : []
   
 },
 {
   "Name": "Pensight ",
   "Description": "The tool to Lead paid live video consultations and manage your coaching business.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/62113b576fc36f6316c59c2f_Screenshot%202022-02-19%20at%2018.47.26.png",
   "Category": "nocode",
   "URL": "https://pensight.com/?refCode=techbible88018",
   "Price": "Freemium",
   "Keywords": "Pensight ,",
   "LikedBy" : []
   
 },
 {
   "Name": "PeoplePerHour",
   "Description": "Access global talent on the freelancer website trusted by over 1 million businesses worldwide.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/62e7dc56bac2b045ac4e1dd9_pph-share.ced894418333eca244808771d4a24a87.png",
   "Category": "hire-talent",
   "URL": "https://www.peopleperhour.com",
   "Price": "Freemium",
   "Keywords": "PeoplePerHour,",
   "LikedBy" : []
   
 },
 {
   "Name": "PhantomBusters",
   "Description": "Chain actions and data extraction on the web to generate business leads, marketing audiences. ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614b2cc2ecfe21475085c683_Phantom%20Buster.jpg",
   "Category": "automate",
   "URL": "https://phantombuster.com?deal=ghita89",
   "Price": "Free package",
   "Keywords": "PhantomBusters,",
   "LikedBy" : []
   
 },
 {
   "Name": "Pinnacle Studio",
   "Description": "Pinnacle Studio is a full-feature video editing and production tool used by over 13mil+ users worldwide. It allows users to edit their content with various features like multi-cam, split-screen editing, motion tracking and loads more. It also has some basic aspects you can use such as colour grading, screen recording, stop motion animation, blend modes, audio ducking and more to really bring your video to life.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a486a4d6a71091bced53_uc.png",
   "Category": "createcontent",
   "URL": "https://www.pinnaclesys.com/en/",
   "Price": "",
   "Keywords": "Pinnacle Studio,Video Editing, Production, Visual Effects, Content Creation",
   "LikedBy" : []
   
 },
 {
   "Name": "Pixabay",
   "Description": "Pixabay helps you find your perfect free image or video to download and use for anything.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bdaf48e2bede_ymsMrrHb_400x400.png",
   "Category": "createcontent",
   "URL": "https://pixabay.com/",
   "Price": "Freemium",
   "Keywords": "Pixabay,",
   "LikedBy" : []
   
 },
 {
   "Name": "PocketTube",
   "Description": "PocketTube is a useful tool for anyone who uses YouTube frequently and wants to improve their viewing and organizational experience on the platform, it's a browser extension for Google Chrome and Firefox that provides a suite of tools to help YouTubers and video content creators manage their subscriptions, organize content, and enhance their viewing experience. Some of it's key features include the ability to create custom collections of channels, manage subscriptions, and sort content by various criteria such as upload date, view count, and more. It also provides a number of tools to enhance the viewing experience, such as the ability to play videos in a floating pop-up window, loop videos, and speed up or slow down playback.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e394a46b74b6778a83_uc.png",
   "Category": "analytics",
   "URL": "https://pockettube.io/",
   "Price": "",
   "Keywords": "PocketTube,Subscription Management, Viewing Experience, Analytics, Content Creators, Youtubers",
   "LikedBy" : []
   
 },
 {
   "Name": "Podia",
   "Description": "Podia is an online course platform, it offers a collection of course creation tools that help instructors create, market and sell them. Podia���������������������������s tools include course creation, memberships, downloads, a website builder, email marketing, e-commerce functionality, live chat, host online communities, and affiliate ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a488a4d6a78ca5bced78_uc.jpeg",
   "Category": "sales",
   "URL": "https://www.podia.com/",
   "Price": "Freemium",
   "Keywords": "Podia,Digital Marketplace, Online Courses, Subscription Plans, Webinars, Membership Sites",
   "LikedBy" : []
   
 },
 {
   "Name": "Pollfish",
   "Description": "get real-time insights from real consumers in no time.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614c504ddb60269e1017c467_Pollfish_logo_negative.jpg",
   "Category": "scheduling-software",
   "URL": "https://www.pollfish.com",
   "Price": "Paid",
   "Keywords": "Pollfish,",
   "LikedBy" : []
   
 },
 {
   "Name": "Post Affiliate Pro",
   "Description": "Manage multiple affiliate programs, track affiliate partner performance, assign commissions and issue payouts on one platform",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd6d1ce2bedb_6LRZ37q6_400x400.jpg",
   "Category": "sales",
   "URL": "https://www.postaffiliatepro.com/",
   "Price": "Paid with Free Trial",
   "Keywords": "Post Affiliate Pro,",
   "LikedBy" : []
   
 },
 {
   "Name": "Powtoon",
   "Description": "Powtoon is a user-friendly and an intuitive animation software, where anyone can create engaging, animated videos with a professional look and feel. It enables the creation of unique videos, whether it be for social media, internal use or training and education. It really doesn't matter if you're a beginner or an advanced video editor, you can create customised and animated videos, screen recordings as well as whiteboard doodling all within the platform, and distribute across your social channels from the platform itself. You will be able to find a  wide range of templates to choose from across multiple categories, so you can get a headstart with video creation.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a486ea9b98102f5ec0dd_uc.png",
   "Category": "createcontent",
   "URL": "https://www.powtoon.com/?locale=en",
   "Price": "",
   "Keywords": "Powtoon,Animation Software, Video Creation, Social Media, User Friendly, Presentations",
   "LikedBy" : []
   
 },
 {
   "Name": "Principle",
   "Description": "Principle makes it easy to design animated and interactive user interfaces whether you're designing the flow of a multi-screen app, or new interactions and animations, it helps you create designs that look and feel amazing. It helps turn your designs into interactive experiences perfect to take your prototypes to the next level.The tool is user friendly and really fast, you can also export designs as videos and gifs.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a4832fcc2015e0774217_uc.png",
   "Category": "design",
   "URL": "https://principleformac.com/",
   "Price": "",
   "Keywords": "Principle,Animation, User Interface, Design, App Design, Graphic Design",
   "LikedBy" : []
   
 },
 {
   "Name": "ProductBoards ",
   "Description": "Group product features by release, sprint, broad time horizons, or now/next/later buckets. Track feature dependencies to mitigate risks.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/6317221c73eae455fb4d1a15_productboard-logo.svg",
   "Category": "product-management-stack",
   "URL": "https://www.productboard.com",
   "Price": "Freemium",
   "Keywords": "ProductBoards ,",
   "LikedBy" : []
   
 },
 {
   "Name": "Profitwell",
   "Description": "Profitwell is subscription software that helps you achieve faster recurring revenue growth. ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd9a20e2bef4_bY6uEMK4_400x400.jpg",
   "Category": "collaboration",
   "URL": "https://www.profitwell.com/",
   "Price": "",
   "Keywords": "Profitwell,",
   "LikedBy" : []
   
 },
 {
   "Name": "Quartile",
   "Description": "The machine learning behind this beast of an app is no joke! For my ecommerce friends, this AI automatically manages your products pricing and ad campaigns across������������������Amazon, Google shopping, Instagram & Facebook ����������������",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/62f3c06b523cfa279586b25f_quartiles_logo2x.png",
   "Category": "sales",
   "URL": "https://quartile.grsm.io/gfn89o58gz8j",
   "Price": "Paid",
   "Keywords": "Quartile,",
   "LikedBy" : []
   
 },
 {
   "Name": "Quintly",
   "Description": "Quintly is made to help small to large size enterprises monitor, track, optimize and benchmark their social media profiles it also allows users to view and analyze competitors strategies. A social media analytics platform, Quintly integrates with Facebook, Twitter, Google+, LinkedIn, Instagram and YouTube accounts. The solution helps users derive performance insights and optimize strategies via custom dashboard and analytics. Key features comprise automated reports, Application Programming Interface (API) access, custom social media metrics, user management, data export, private statistics and more. Quintly helps users automate analysis reporting and create custom reports, white labeled templates and deliver them in multiple formats.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e34ac6a9f33252f487_uc.png",
   "Category": "analytics",
   "URL": "https://www.quintly.com/",
   "Price": "",
   "Keywords": "Quintly,Social Media Monitoring, Analytics, Reporting, Optimization, Benchmarking",
   "LikedBy" : []
   
 },
 {
   "Name": "Rally",
   "Description": "Launch your own social token that enables transactions, access, and more creative solutions for your economy.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/61cb13ddf5c62e0769df25fd_rally-logo-freelogovectors.net_.png",
   "Category": "web-3-0",
   "URL": "https://rally.io",
   "Price": "Freemium",
   "Keywords": "Rally,",
   "LikedBy" : []
   
 },
 {
   "Name": "Rarible",
   "Description": "NFT's marketplace",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e2de947739621dd6358d7_66962e0c-fd5c-46c9-adec-1e411d1f374b-1620037441088.png",
   "Category": "web-3-0",
   "URL": "https://app.rarible.com",
   "Price": "Paid",
   "Keywords": "Rarible,",
   "LikedBy" : []
   
 },
 {
   "Name": "Reclaim ai",
   "Description": "Reclaim is a calendar tool that helps users manage their schedules and prioritize their time, it analyses user behavior and provide insights and suggestions for more efficient scheduling. Reclaim.ai features help users optimize their schedules, including automatic scheduling, intelligent rescheduling, and schedule blocking. The platform integrates with a variety of calendar applications, such as Google Calendar, Outlook, and Apple Calendar, to provide users with a seamless experience it also provides analytics and reporting tools that allow users to track their productivity and identify areas for improvement.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97d64be55d7a07a1e1ff_uc.webp",
   "Category": "automate",
   "URL": "https://reclaim.ai/",
   "Price": "",
   "Keywords": "Reclaim ai,Automatic Scheduling, Calendar management,Time optimization,Productivity tracking, Team collaboration",
   "LikedBy" : []
   
 },
 {
   "Name": "RemoteCo",
   "Description": "Post a free job offer to hire remote employees from Latin America. From virtual assistants to graphic designers web designers, web developers and sales reps",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/62e7dbad9afc476ee9fc15bc_logo.svg",
   "Category": "hire-talent",
   "URL": "https://www.remoteco.com",
   "Price": "Freemium",
   "Keywords": "RemoteCo,",
   "LikedBy" : []
   
 },
 {
   "Name": "Report Garden",
   "Description": "Report Garden is an analysis tool that helps its users create simple reports with data gathered from various channels, the tool is designed to make the reporting process easier and more enjoyable, and with it, you can track SEO, pay per click (PPC) and social media data. You can setup reports for Google Ads, Facebook Ads,Twitter and many more, it also has the ability to perform SEO audits and keyword performance. Automating beautiful reports has never been easier thanks to this platform.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a482a3a619ba66f6110e_uc.png",
   "Category": "analytics",
   "URL": "https://reportgarden.com/",
   "Price": "",
   "Keywords": "Report Garden,Reports, Analytics, Data, Social Media, Automate",
   "LikedBy" : []
   
 },
 {
   "Name": "Retool",
   "Description": "Stop wrestling with UI libraries, hacking together data sources, and figuring out access controls. Start shipping apps that move your business forward.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/62ecd5ca8ef108837412152d_logo-full-black.png",
   "Category": "nocode",
   "URL": "https://retool.com",
   "Price": "Paid with Free Trial",
   "Keywords": "Retool,",
   "LikedBy" : []
   
 },
 {
   "Name": "RevealBot",
   "Description": "Revealbot helps to simplify the automation of your ad campaigns running on the most popular platforms: Facebook, Instagram, Google, Snapchat, and TikTok. With it you can optimize budgets and auto-manage ad campaigns, generate reports and visual charts integrated with Slack, create Facebook ads in bulk, and auto-promote Instagram and Facebook posts. Along with its Advertising Automation, Optimization, Reporting and Analytics, Alerts and Integrations RevealBot is considered a powerful advertising automation platform that can help businesses of all sizes to optimize their advertising campaigns across different platforms and improve their ROI.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97dba120a64a5a8e1813_uc.png",
   "Category": "automate",
   "URL": "https://revealbot.com/",
   "Price": "",
   "Keywords": "RevealBot,Automation, Ad Campaign, Bulk Creation, Reports, Analytics",
   "LikedBy" : []
   
 },
 {
   "Name": "Rewardful",
   "Description": "Rewardful is a simple way for for you setup affiliate and referral programs with Stripe.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd9a09e2bedc_d7WuPqqQ_400x400.jpg",
   "Category": "createcontent",
   "URL": "https://www.getrewardful.com/",
   "Price": "",
   "Keywords": "Rewardful,",
   "LikedBy" : []
   
 },
 {
   "Name": "Ruzuku",
   "Description": "Ruzuku is a learning management system designed to help educational institutions create, teach, stream, and sell online courses. This platform has all the core features you need to build and run a great online course experience, teachers can set up one-time or custom subscriptions, accept payments, conduct webinars to engage with students, easy course creation, video upload and audio content, host files and many more.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a489c2f015c4ad7a3ebe_uc.jpeg",
   "Category": "createcontent",
   "URL": "https://www.ruzuku.com/",
   "Price": "Freemium",
   "Keywords": "Ruzuku,Online Courses, Learning Platform, Payment Processing, Course Creation Tools, Community Engagement:",
   "LikedBy" : []
   
 },
 {
   "Name": "Salesmachine",
   "Description": "Saas metrics dashbords to report on customers behavior and real-time product usage included in the free package. As well as data on leads, conversions and costumer onboarding",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e12ef42a790f64f4151d0_salesmachine_logo_v2-2.png",
   "Category": "analytics",
   "URL": "https://www.salesmachine.io",
   "Price": "Free package",
   "Keywords": "Salesmachine,",
   "LikedBy" : []
   
 },
 {
   "Name": "Sapling",
   "Description": "Sapling sits on top of Customer Relationship Management and messaging platforms it provides real-time suggestions to help sales, support, and success teams more efficiently compose personalized responses. This tool helpos Respond to more customers, Reduce response and handle time, Improve grammar and language quality it also helps Increase efficiency and customer satisfaction. It's mainly designed to help users become more effective and efficient writers, by providing real-time feedback, workflow automation, and analytics tools that help users identify areas for improvement and track their progress.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97db2192b169465a3d3c_uc.png",
   "Category": "analytics",
   "URL": "https://sapling.ai/",
   "Price": "",
   "Keywords": "Sapling,Customer Relationship Management, Analytics, Reporting, Error Detection",
   "LikedBy" : []
   
 },
 {
   "Name": "Scoreapp",
   "Description": "Use scorecard marketing to understand each prospect as an individual, and follow up with personalised messaging.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e09e0ffff886ef8b8f2fe_ogimage.png",
   "Category": "community",
   "URL": "https://www.scoreapp.com",
   "Price": "Free",
   "Keywords": "Scoreapp,",
   "LikedBy" : []
   
 },
 {
   "Name": "Segment",
   "Description": "Segment.io is a customer data infrastructure (CDI) platform that collects, stores and routes data from users to hundreds of tools and digital properties, it  works by collecting and connecting data from other tools and aggregating the data to monitor performance, inform decision-making processes, and create uniquely customized user experiences. Unify data points and your technology stack the power to talk to each other, so you can get a better understanding of users through your customer journey, better personalised targeting, better data to make faster and better business decisions, align data across departments and teams (whether marketing, development, etc) and so much more.Improve targeting across the whole customer journey. From website visitors to custom Intercom messages, to landing page visitors receving customised personalised ads through Google Display... you get the picture. There are over 300 native integrations with Segment with many of your favourite platforms, plus more possibilities thanks to Zapier and custom API's.You can setup your own data warehouses in just minutes, which is formatted and schematised for consistent data. Functions is another big feature as part of Segment where you can connect many applications (1000's even) with just a few lines of Java Script",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e32dd15af29d4bc745_uc.png",
   "Category": "analytics",
   "URL": "https://segment.com/",
   "Price": "",
   "Keywords": "Segment,Customer data platform, Data integration, Analytics tracking, User behavior tracking, Data privacy compliance",
   "LikedBy" : []
   
 },
 {
   "Name": "Segmetrics",
   "Description": "Segmetrics is a web-based marketing analytics software designed to help you get a better understanding of attribution and performance of your funnels. This tool does a great job at presenting more accurate results and metrics of funnels and for an even more specific results around revenue and Return on ad spend (ROAS) you can connect your payments/bank accounts so it can help you see more accurate reporting. This way you can make decisions with more reliable data. Dive deep into various stages of your funnels, explore segments, filter by funnel stages and loads more to see where you can optimise.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a482c7b20cbc82254545_uc.webp",
   "Category": "analytics",
   "URL": "https://segmetrics.io/",
   "Price": "",
   "Keywords": "Segmetrics,Analytics Software, Marketing, Funnels, Data",
   "LikedBy" : []
   
 },
 {
   "Name": "Sendgrid",
   "Description": "SendGrid is a cloud-based email service that provides businesses and developers with the tools they need to create, send, and manage transactional and marketing emails. With SendGrid, users can design and deliver email campaigns, track email opens and click-through rates, and manage their email lists. It offers them features such as email templates, list segmentation, personalization, split testing, and real-time analytics to help businesses optimize their email marketing efforts and improve their overall marketing strategy, it also includes tools for transactional email, such as password resets, order confirmations, and account notifications, to help businesses automate their email communication with customers.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97d91a78434558653c18_uc.png",
   "Category": "sales",
   "URL": "https://sendgrid.com/",
   "Price": "",
   "Keywords": "Sendgrid,Email marketing, Transactional email, Email delivery, Email analytics",
   "LikedBy" : []
   
 },
 {
   "Name": "SendX",
   "Description": "SendX is a comprehensive email marketing and automation platform that can help businesses of all sizes to streamline their email marketing efforts and drive better results, It enables users to send unlimited email campaigns, build email lists, design emails using a drag-and-drop editor, email automation and sequences. it provides users with a range of features to streamline their email marketing efforts like Email Marketing, Marketing Automation, Landing Pages, Integrations with a wide range of marketing tools, including CRM systems, e-commerce platforms, and analytics tools, AI-powered Personalization, Reporting and Analytics.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97da82c4d70155356669_uc.png",
   "Category": "sales",
   "URL": "https://www.sendx.io/",
   "Price": "",
   "Keywords": "SendX,Email Marketing, Marketing Automation, Landing Pages, AI-powered Personalization, Analytics",
   "LikedBy" : []
   
 },
 {
   "Name": "ShareTribe",
   "Description": "Build your marketplace without code & launch fast ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614c29aca3cbf27b39283568_6b1a6af608a19e8c3fcd0396f627eb4fe39d41e7.png",
   "Category": "nocode",
   "URL": "https://www.sharetribe.com",
   "Price": "Paid with Free Trial",
   "Keywords": "ShareTribe,",
   "LikedBy" : []
   
 },
 {
   "Name": "Sharpspring Ads",
   "Description": "SharpSpring is a cloud-based marketing automation platform designed to help businesses attract, engage, and convert leads into customers. It provides a suite of tools for managing lead generation, email marketing, social media marketing, CRM, and analytics, all in one integrated platform. Unlike normal remarketing within the ads manager, you can do more complex targeting across your campaigns, Within the analytics feature, you'll be able to see a clear picture of cross-device tracking, conversion, revenue and other key analytics details. You can have ads displayed on some of the world's best sites, across mobile, tablet and desktop. You can also advertise visitors on Twitter.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97ddd75b0b0442260c8e_uc.png",
   "Category": "analytics",
   "URL": "https://sharpspring.com/ads/",
   "Price": "",
   "Keywords": "Sharpspring Ads,Email Marketing, Social Media Marketing, CRM, Analytics",
   "LikedBy" : []
   
 },
 {
   "Name": "Sidekick ai",
   "Description": "Sidekick ai is a Smart Calendar is designed to help sales professionals schedule meetings more efficiently, by providing personalized suggestions for meeting times based on the preferences of both parties. uses machine learning algorithms to analyze the schedules of both the parties and provide suggestions for meeting times that work for both parties it also takes into account factors such as time zones, availability, and previous meeting history to provide personalized and relevant suggestions. In Addition it integrates with a variety of calendar applications, such as Google Calendar, Outlook, and Apple Calendar.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97d6bb37c74f5708b5f0_uc.png",
   "Category": "automate",
   "URL": "https://sidekickai.com/",
   "Price": "",
   "Keywords": "Sidekick ai,AI scheduling, Calendar automation, Time zone management, Meeting optimization",
   "LikedBy" : []
   
 },
 {
   "Name": "Sketch",
   "Description": "Sketch is a vector graphics editor for macOS designed to help businesses create icons and vector graphics, collaborate with team members and modify designs' topography or fonts via a unified platform. The application enables employees to automate workflows, receive feedback on designs, and share prototype links with internal and external stakeholders. It provides a variety of other features such as data export, project management, reporting and more. Sketch allows professionals to handle data synchronization activities and invite clients and external collaborators to access or edit specific documents. Additionally, it helps designers create and store symbols and layer styles in a centralized repository and share them with specific users. Similar to the other tools, you can create anything with Sketch. The interface is super simple to use, no matter your skill level, Share and collaborate on your designs with teammates, clients, founders and more. Simply share links and invite via email.Take advantage of the libraries available, as well as a supportive community.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e745ff3d05b5cd6d50_uc.png",
   "Category": "community",
   "URL": "https://www.sketch.com/",
   "Price": "",
   "Keywords": "Sketch,Graphics Editor, Automate Workflows, Data Export, Prpject Management, Reporting",
   "LikedBy" : []
   
 },
 {
   "Name": "Skylead",
   "Description": "Sales Engagement Platform that tracks your leads������������",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e144cdc5ca9b268c509c1_1608820460_84835969_2473280789602885_4881082232841699328_n_mid.png",
   "Category": "sales",
   "URL": "https://skylead.io?fpr=techbible&fpr=techbible",
   "Price": "Paid",
   "Keywords": "Skylead,",
   "LikedBy" : []
   
 },
 {
   "Name": "Sli.do",
   "Description": "Slido is an easy-to-use Q&A and polling app that will turn your silent listeners into engaged participants.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e073f2a076afe32fb95d9_slido-logo-c79e792.svg",
   "Category": "community",
   "URL": "https://www.sli.do",
   "Price": "Free package",
   "Keywords": "Sli.do,",
   "LikedBy" : []
   
 },
 {
   "Name": "Smartlook",
   "Description": "Smartlook is a visitor recording tool that allows you to see your website through the eyes of your visitors. Let���������������������������s say, you have an online shop, and you want to see what your customers see when they go to your website, where they click, which products get their attention. You can install Smartlook in your website and start tracking the visitors and see what they���������������������������re doing on the website, how long they spend on the website, where they click, which pages they browse, what contents they see, it is used in many ways. It can be used as a tool to enhance the user experience, improve the quality of the support that you can provide. Also, it can complement your traditional analytics tool by giving you a more qualitative perspective of how visitors are using your website. Furthermore, it can be quite a valuable marketing resource that will boost your sales and gll make your website more appealing to the public and bring a major positive impact to your business.Track the whole customer journey, see how users interact with pages throught heatmaps, as well as record video sessions to see exactly what they're doing within your product.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e5d9ff67531b41efbb_uc.png",
   "Category": "analytics",
   "URL": "https://www.smartlook.com/",
   "Price": "",
   "Keywords": "Smartlook,Session replay, User behavior tracking, Conversion analysis, Funnel analysis, Heatmaps",
   "LikedBy" : []
   
 },
 {
   "Name": "Snazzy.ai",
   "Description": "Get started with AI copywriting and supercharge your content workflow",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e12a3546fa8de54bb6e8b_snazzy-logo.png",
   "Category": "copywriting",
   "URL": "https://snazzy.ai",
   "Price": "Free package",
   "Keywords": "Snazzy.ai,",
   "LikedBy" : []
   
 },
 {
   "Name": "Social Searcher",
   "Description": "Real-time Social Media search engine ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614df6da13b1076801d062ef_-RdGTw-U.jpg",
   "Category": "social-media",
   "URL": "https://www.social-searcher.com",
   "Price": "Freemium",
   "Keywords": "Social Searcher,",
   "LikedBy" : []
   
 },
 {
   "Name": "Social Status",
   "Description": "Social Status is a social media analytics tool to help you keep across all your key metrics, it is designed to provide insights based on social media performance and increase efficiency with automated reporting. The platform comprises of four primary suite of tools, ranging from profile, ads, influencer and also competitor analytics. You can easily setup other profiles you want to track and see when they post, the engagement they get, and lots more. Another core component of the platform is the automated social media reports. Very beneficial for time saving, to help marketing and community managers to stay in the loop, without having to log in.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a484b2b2b112dd842cb0_uc.webp",
   "Category": "analytics",
   "URL": "https://www.socialstatus.io/",
   "Price": "Freemium",
   "Keywords": "Social Status,Social Media, Analytics, Automated Reporting, Key Metrics",
   "LikedBy" : []
   
 },
 {
   "Name": "Softr",
   "Description": "Build a professional web app on Airtable, without any code. ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614708506ccbc61cdd682ae8_0-26-1.png",
   "Category": "nocode",
   "URL": "https://www.softr.io/?via=ghita",
   "Price": "Free package",
   "Keywords": "Softr,",
   "LikedBy" : []
   
 },
 {
   "Name": "Solarwinds Pingdom",
   "Description": "This tool help you analyse the uptime & speed of your site and provides alerts when server connection is slow and specific transactions are affected",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e11e5e95fddfd4afea7e4_02k2KClrSd9UHmOR3etlPF9-9.1569478846.fit_scale.size_760x427.jpg",
   "Category": "analytics",
   "URL": "https://tools.pingdom.com",
   "Price": "Free package",
   "Keywords": "Solarwinds Pingdom,",
   "LikedBy" : []
   
 },
 {
   "Name": "Soon",
   "Description": "Create shifts, manage leave, and streamline daily tasks to run your team better and achieve your goals.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/615c99d3939bb940914ab26c_soon-1559230436-logo.png",
   "Category": "collaboration",
   "URL": "https://soon.grsm.io/dlb63xym8bgf",
   "Price": "Paid with Free Trial",
   "Keywords": "Soon,",
   "LikedBy" : []
   
 },
 {
   "Name": "Splice",
   "Description": "Royalty-free sound samples library, software pluggins and tutorials for aspiring artists",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e0d1e6495cb8037bd1c0a_34ed1b1b-5029-4e02-962a-515a3578c4e8_medium.png",
   "Category": "createcontent",
   "URL": "https://splice.com",
   "Price": "Free package",
   "Keywords": "Splice,",
   "LikedBy" : []
   
 },
 {
   "Name": "Spline designs",
   "Description": "Spline is an intuitive designing tool helping out developers create attractive 3D web designs, designers can use text, edit materials, generate basic geometric shapes and import 3D models. This platform can help you create 3D experiences for the web in your browser with no complex software just a clean interface which any skilled person can pick up, you can work with 2D and 3D objects, turn them into interactions and export as images, gifs and even videos. You can even import designs into Webflow and Notion.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a4823c7fe516bfb26869_uc.jpeg",
   "Category": "design",
   "URL": "https://spline.design/",
   "Price": "Freemium",
   "Keywords": "Spline designs,Design, 3D modeling, Animation,  Import",
   "LikedBy" : []
   
 },
 {
   "Name": "Squarespace",
   "Description": "Easy website builder",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd0a88e2be4d_huJH2lyt_400x400.jpg",
   "Category": "nocode",
   "URL": "https://www.squarespace.com/",
   "Price": "Free package",
   "Keywords": "Squarespace,",
   "LikedBy" : []
   
 },
 {
   "Name": "StockSnap",
   "Description": "StockSnap helps you find beautiful, high-quality, high-resolution and free photos.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd675be2bee0_Dc-yJQLW_400x400.jpg",
   "Category": "createcontent",
   "URL": "https://stocksnap.io/",
   "Price": "Freemium",
   "Keywords": "StockSnap,",
   "LikedBy" : []
   
 },
 {
   "Name": "Subbly",
   "Description": "I love a growth hacking tool. If you are building a subscription business, Subbly is your go to no code web builder. Get creative with the design on their drag and drop tool and let them handle billing and shipping cycles.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/62f3c1080d180f6914157959_bb2b387f4e3635439c11563666eb4566.png",
   "Category": "nocode",
   "URL": "https://join.subbly.co/5rb1m5f8qpml",
   "Price": "Paid with Free Trial",
   "Keywords": "Subbly,",
   "LikedBy" : []
   
 },
 {
   "Name": "Super (Notion)",
   "Description": "If you're a fan of Notion, you're going to be a fan of Super. Super is a website builder that is built on top of Notion, a popular productivity and organization tool. With Super, you can use Notion's building blocks to create web pages, blog posts, and entire websites without needing to know how to code. Super also offers a range of customization options, allowing you to choose from different templates, fonts, and colors to create a unique look for your site. You can connect your own custom domain and publish your site to the web with just a few clicks. Super also includes features like search engine optimization (SEO) tools and integrations with other third-party services Yes, you can build websites and landing pages with Notion. How cool is that? It comes with lots of great features that you'd find in other website builders, including custom domains, SEO optimised, custom theming, full responsive and more. Not to mention it's lightning fast It's also got a market of themes as well as a new page builder, so you can quickly test and make something in a matter of no time.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e1ddc67942ab586707_uc.svg",
   "Category": "nocode",
   "URL": "https://super.so/",
   "Price": "",
   "Keywords": "Super (Notion),Notion integration, No-code website builder, Customizable templates, SEO tools, Third-party integrations",
   "LikedBy" : []
   
 },
 {
   "Name": "Supermetrics",
   "Description": "All your marketing data, wherever you need it. Supermetrics streamlines the delivery of data from 100+ sales and marketing platforms into the analytics and reporting tools marketers use to make better decisions, with it, businesses can aggregate siloed data from marketing and sales platforms, such as Facebook Ads, Google Analytics, and Instagram, into their go-to reporting, analytics, and storage platform whether that���������������������������s a Business Intelligence tool, a spreadsheet, a data visualization tool, a data lake, or a data warehouse. The result is greater insights into your marketing data, considerable time and cost savings by eliminating manual copy/paste, and improved marketing performance based on data-backed decisions. Supermetrics enables marketers, and the analysts and engineers who support them, to spend more time using data and less time moving data, It offers a lot of flexibility and ways you can use data from sources to build repoel, Snowflake, Bigquery, or a custom approach through their  Application Programming Interface (API).",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e7f865abc4027e46eb_uc.png",
   "Category": "analytics",
   "URL": "https://supermetrics.com/",
   "Price": "",
   "Keywords": "Supermetrics,Marketing Date, Analytics, Reporting, Date Warehouse, Data Importation",
   "LikedBy" : []
   
 },
 {
   "Name": "SuperRare",
   "Description": "NFT Marketplace ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/6159d3bd21b13cdb4bb2ed49_S37aE1P0_400x400.jpg",
   "Category": "web-3-0",
   "URL": "https://superrare.com",
   "Price": "Paid",
   "Keywords": "SuperRare,",
   "LikedBy" : []
   
 },
 {
   "Name": "SurferSEO",
   "Description": "Generate a whole content strategy in a few clicks, and write data-driven content loved by search engines and people.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/6159cee293bb558300a5be2a_surferseo-logo-p5xm3l0zycpokyi0a3b9v6ko44aa1v3tmzg9bwa7mo.jpg",
   "Category": "improve-my-seo",
   "URL": "https://surferseo.com?fpr=ghita12",
   "Price": "Paid",
   "Keywords": "SurferSEO,",
   "LikedBy" : []
   
 },
 {
   "Name": "SurveySparrow",
   "Description": "Multilingual surveys with chatbots, with email reminders and personalised interface. ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614707ae62f7c811d0dbe72b_1774921884994_5ae959ec5b13f204e7fa_512.jpg",
   "Category": "community",
   "URL": "https://surveysparrow.grsm.io/Techbible",
   "Price": "Paid with Free Trial",
   "Keywords": "SurveySparrow,",
   "LikedBy" : []
   
 },
 {
   "Name": "Swydo",
   "Description": "Swydo is a reporting and dashboards platform that allows digital marketing agencies and professionals to create, automate, and share custom reports for their clients and stakeholders. Providing users with a range of features that enable them to connect to various data sources, including Google Analytics, Google Ads, Facebook Ads, and more, and to create customizable reports and dashboards that reflect their clients' KPIs and goals. While it also offers features such as data visualization, automated report generation, and white-label reporting, which enable users to create professional-looking reports and dashboards that reflect their clients' branding and style. Additionally, the platform offers collaboration and feedback features that allow users to share their reports with team members and stakeholders, collect feedback and comments, and track changes and revisions. it's a powerful tool for digital marketing agencies and professionals who want to save time and effort in creating reports and dashboards that reflect their clients' digital marketing performance.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e83b18fd19b141815b_uc.png",
   "Category": "automate",
   "URL": "https://www.swydo.com/",
   "Price": "",
   "Keywords": "Swydo,Digital marketing, Reporting, Dashboards, Automation, Customizable.",
   "LikedBy" : []
   
 },
 {
   "Name": "Synthesia",
   "Description": "Create professional videos in 60+ languages using AI Avatars",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/6322f434cbadc5224ada0a73_61dc4887c7d00a2f74b0a0af_synthesia-logo.svg",
   "Category": "createcontent",
   "URL": "https://www.synthesia.io/?via=ghita",
   "Price": "Freemium",
   "Keywords": "Synthesia,",
   "LikedBy" : []
   
 },
 {
   "Name": "Systeme",
   "Description": "Systeme.io is an all-in-one marketing platform that helps businesses create and launch sales funnels, affiliate programs, email marketing campaigns, online courses, blogs, and websites. Marketers can utilize the platform to automatically capture leads, add rules, trigger emails and more. This platform in many ways is like an end-to-end solution, particularly for entrepreneurs and non-technical marketers, who want to build funnels, landing pages and more all in the one platform. A key feature as part of the platform which is impressive, is that you can manage affiliates this is certainly an advantage and much easier to manage if within one platform.There capabilities of the automation is also really awesome. You can easily build flows in just minutes.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97df9a979fcd58eca371_uc.webp",
   "Category": "nocode",
   "URL": "https://systeme.io/home",
   "Price": "",
   "Keywords": "Systeme,Sales funnel builder, E-commerce, Analytics, Membership sites, Email marketing",
   "LikedBy" : []
   
 },
 {
   "Name": "Tactiq",
   "Description": "Real-time transcription of Google Meet so you'll never miss a word",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614c2fbb31c07f5e1253b44c_61124b5fce98696dcad02edf_tactiqlogo-2.png",
   "Category": "collaboration",
   "URL": "https://tactiq.io",
   "Price": "Free package",
   "Keywords": "Tactiq,",
   "LikedBy" : []
   
 },
 {
   "Name": "Teachable",
   "Description": "Teachable is a cloud-based e-learning platform that helps users create, market, and sell digital courses. It enables them to create interactive video lessons and assessments with drag-and-drop tools, and customize their courses with a variety of themes, quizzes, and engagement tools. It also provides users with a powerful set of marketing tools, such as automated student onboarding, instant course delivery, and detailed analytics and you can also interact with your students through video sessions, as well as them booking time with you by syncing your calendar.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a487c2f01564267a3eae_uc.png",
   "Category": "sales",
   "URL": "https://teachable.com/",
   "Price": "Freemium",
   "Keywords": "Teachable,Online Courses, E-learning, Course Creation, Course Hosting, Learning Management System.",
   "LikedBy" : []
   
 },
 {
   "Name": "Teachery",
   "Description": "Teachery is a beginner-friendly online course platform that helps you monetize your expertise and turn it into sellable online courses. It's features allows users to host live sessions, create video lessons, embed video, audio, slide presentations and interactive quizzes, customize the look and feel of the course, payment plans, memberships and Promo Codes, Landing Pages, Schedule Lessons With drip courses and integrate with their email service provider. They can also track student progress and engagement.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a4885cfb9e09338f49f5_uc.png",
   "Category": "sales",
   "URL": "https://www.teachery.co/",
   "Price": "",
   "Keywords": "Teachery,Online Course Creation, Course Builder, Learning Management System, Teaching Platform, E-Learning",
   "LikedBy" : []
   
 },
 {
   "Name": "Teamwork Desk",
   "Description": "With Teamwork Desk, you can give your team full visibility over all customer communications in one place.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bdd5c4e2beee_vW-ya_fq_400x400.png",
   "Category": "analytics",
   "URL": "https://www.teamwork.com/desk/",
   "Price": "",
   "Keywords": "Teamwork Desk,",
   "LikedBy" : []
   
 },
 {
   "Name": "Thinkific",
   "Description": "Thinkific is a software platform that provides an easy way for customers to build, market, and sell their own online courses. It offers a range of features including custom branding, an easy-to-use builder, a drag-and-drop editor, payment gateway and website integrations, student management tools and more. While also providing content protection, course analytics, and automated email marketing tools to help course creators reach their target audience. With it, course creators have complete control over the design and content of their courses, helping them to deliver engaging and effective learning experiences to their customers.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a48859c17869d09d92ff_uc.webp",
   "Category": "sales",
   "URL": "https://www.thinkific.com/",
   "Price": "Freemium",
   "Keywords": "Thinkific,Online Learning Platform, Course Creation, Course Marketing, Student Engagement, Learning Management System (LMS)",
   "LikedBy" : []
   
 },
 {
   "Name": "Thrivecart",
   "Description": "ThriveCart is a web-based shopping cart platform that allows to create and manage their online sales funnels. The platform is designed to help increase online sales and revenue by providing a wide range of features and tools for managing the sales process It's designed to be easy to use. This platform pretty much does it all when it comes to funnels - landing pages, 1 click upsells, modal carts and Split testing, The list of features just don't end there - you can run affiliate programs, subscriptions, memberships, sales funnel builder and more. Amazing the amount of value in just one tool. Additionally, you can use Zapier to do even more integrations as well as Webhooks, so there's more customisation you can do to build top quality funnel experiences.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e12192b109245a3d6d_uc.webp",
   "Category": "sales",
   "URL": "https://thrivecart.com/",
   "Price": "",
   "Keywords": "Thrivecart,E-commerce Platform, Shopping Cart Software, Affiliate Management System, Sales Funnel Builder, Analytics and Reporting",
   "LikedBy" : []
   
 },
 {
   "Name": "Tolstoy",
   "Description": "Insert video in your emails and website, Viewers respond to your Tolstoys with choices, text and video messages, contact information, and more. ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/62c544bf5432b0251580d4f9_60812491cf84674b0498eaac_Tolstoy-logo.svg",
   "Category": "createcontent",
   "URL": "https://www.gotolstoy.com?fpr=ghita38",
   "Price": "Freemium",
   "Keywords": "Tolstoy,",
   "LikedBy" : []
   
 },
 {
   "Name": "Totango",
   "Description": "Totango is a cloud-based customer success and retention platform. It enables an enterprise to accelerate customer success, adoption, retention and expansion by managing all post-sales activities. It increases the conversion rate by collecting customer information, monitors data for meaningful customer health changes and drives proactive engagement by customer success teams, It helps users understand customers��������������������������� health scores, usage and status, and the optimization of customer operations using scorecards and communication templates, and also by continuous tests of changing expectations of customers.  There are a few key product features as part of the platform, from 360 customer analysis views, segmentation, workflow automations, customer health scores, data hubs and more. Go deep by seeing customer ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e5b365963162706ed0_uc.png",
   "Category": "analytics",
   "URL": "https://www.totango.com/",
   "Price": "",
   "Keywords": "Totango,Customer success, Customer engagement, Customer retention, SaaS analytics, User behavior tracking",
   "LikedBy" : []
   
 },
 {
   "Name": "Tray",
   "Description": "Tray.io is a low-code automation and integration platform, It allows users to integrate different software applications using automated workflows and inbuilt connectors for different systems, It has been praised for its ease of use and speed of development making it the leader in the low-code automation industry.You can create visual workflows from simple one-to-one connectors to multi-step. It's very much a drag-and-drop experience and has lots of ways to transform and format data between apps.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a48ec4807ddfc2ee60d8_uc.png",
   "Category": "automate",
   "URL": "https://tray.io/",
   "Price": "",
   "Keywords": "Tray,Automation platform, No-code integration,  Business workflows, Scalable data orchestration, Automated data processing",
   "LikedBy" : []
   
 },
 {
   "Name": "Tribe",
   "Description": "Influencer network for authentic branded content to use in your marketing. You create a breif in 5 minutes with your budget and start watching the content roll out by influencers",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e0fed8ec1bb403e68653e_tribe_loading_indicator.gif",
   "Category": "find-influencers",
   "URL": "https://www.tribegroup.co",
   "Price": "Paid",
   "Keywords": "Tribe,",
   "LikedBy" : []
   
 },
 {
   "Name": "TubeBuddy",
   "Description": "TubeBuddy is a browser extension (aka browser plugin) that adds a layer of tools directly on top of YouTube's website. Built for YouTube, TubeBuddy helps businesses create, run, and optimize channels via keyword research, search result rank tracking, thumbnail generation, and more. It lets staff members schedule the date and time to automatically publish videos as well as update processes across public channels and specific playlists. With it , you can do everything from keyword research, publish videos faster than usual, optimise for search results so you can increase your views and more. One of it's features is the ability to do bulk actions, such as copying cards, thumbnails, end screens, plus more, also it's SEO features help to optimise your videos, Includes suggestions for the best tags, keywords as well as search rankings for videos.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e28d6444383895e7fd_uc.png",
   "Category": "analytics",
   "URL": "https://www.tubebuddy.com/",
   "Price": "",
   "Keywords": "TubeBuddy,Extension, Analytics, Keyword Research, SEO, Optimisation",
   "LikedBy" : []
   
 },
 {
   "Name": "Tubics",
   "Description": "Tubics is a YouTube SEO tool for businesses which provides analysis and recommendations in order to optimize YouTube video traffic and views. The cloud-based tool offers channel analysis, tag generation, keyword monitoring, SEO recommendations, analytics on video performance, and more, it provides their SEO features with the aim of helping brands get more views on their videos and rank better on search engines. Businesses can gain better insight into how their channel is performing, how individual videos are performing, and how audiences are responding to the content. The platform also provides users with tips and recommendations on how to improve their SEO, including insight into how to optimize video titles, descriptions, and thumbnails. Tubics provides suggestions on how to improve thumbnails in order to maintain brand consistency, and improve clicks, and there���������������������������s even a built-in template edito",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e2ddc679193758670c_uc.webp",
   "Category": "analytics",
   "URL": "https://www.tubics.com/",
   "Price": "",
   "Keywords": "Tubics,SEO, Analytics, Video Performance, Keyword Research, Channel Growth",
   "LikedBy" : []
   
 },
 {
   "Name": "Tubular Labs",
   "Description": "Tubular Labs is a social video analytics and intelligence platform that provides insights and data to help businesses, brands, and creators grow and optimize their video content on social media platforms like YouTube, Facebook, Instagram, and TikTok. It's suite of tools and services allows users to track and analyze video performance, audience engagement, and content trends across various social media platforms. It provides a range of features, such as audience demographics, video engagement metrics, competitive intelligence, and content insights. Tubular Labs' customers include media companies, brands, and digital publishers, who use the platform to better understand their audience, optimize their content, and increase their reach and revenue on social media. Overall, its a useful tool for anyone who wants to leverage the power of social video to grow their business or brand online.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e3a8b1661580274a80_uc.png",
   "Category": "analytics",
   "URL": "https://tubularlabs.com/",
   "Price": "",
   "Keywords": "Tubular Labs,Social video analytics, Video content optimization, Audience insights, Competitive intelligence, Social media tracking",
   "LikedBy" : []
   
 },
 {
   "Name": "Typedream",
   "Description": "Typedream is a no-code website builder that enables users to create web pages and entire websites with a simple and intuitive interface, without needing to know how to code. It allows you to quickly create pages with built-in building blocks, such as headers, footers, forms, buttons, and more. With Typedream, you can customize your website using a range of templates, fonts, and colors, or start from scratch with a blank canvas. It also offers a range of third-party integrations and tools for search engine optimization (SEO) to help your website reach its full potential. Additionally, Typedream offers a range of collaboration tools, allowing you to work on projects with others in real-time. The platform has a clean, and simple drag-and-drop interface so building sites takes minutes. Certainly less clutter and options to focus on building it Has all the necessary foundational features you need including custom domains, SEO-friendly and super fast. There's a good amount of templates which you can use to speed up development.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e1e1f2b298c0e017b4_uc.png",
   "Category": "nocode",
   "URL": "https://typedream.com/",
   "Price": "",
   "Keywords": "Typedream,Website builder, No-code, Customizable, Templates, Integrations",
   "LikedBy" : []
   
 },
 {
   "Name": "Typeform",
   "Description": "Power your brand�������������������������",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd77dee2be5c_HQwTKlIn_400x400.png",
   "Category": "community",
   "URL": "https://www.typeform.com/",
   "Price": "Free package",
   "Keywords": "Typeform,",
   "LikedBy" : []
   
 },
 {
   "Name": "TypeStudio",
   "Description": "All-in-one audio & video editing software that runs online in your browser. You can record, edit and distribute your videos in a single workflow, you can also repurpose video content so you can get mulitple pieces of content out of it. Its an easy-to-use editor without the clunkiness that you may encounter elsewhere, you may even add subtitles at the click of a button. You can also find various templates avalaible to create repurposed videos, or social media videos, in lightning time. ",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a5668fa23e9eccce20d7_TypeStudio%20logo%201.webp",
   "Category": "createcontent",
   "URL": "https://www.typestudio.co/",
   "Price": "Freemium",
   "Keywords": "TypeStudio,Video Editing, Repurposing, Subtitles, Content Creatio, User Friendly",
   "LikedBy" : []
   
 },
 {
   "Name": "Uizard.io",
   "Description": "The design tool for non-designers. Design mockups, mobile apps, websites, wireframes in minutes!",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e0e8772ab3b790fc98db1_KGxGLp0M.jpg",
   "Category": "design",
   "URL": "https://uizard.io",
   "Price": "Free package",
   "Keywords": "Uizard.io,",
   "LikedBy" : []
   
 },
 {
   "Name": "Umso",
   "Description": "Website generator for startups. The fastest way for startups to go live. Design and publish a beautiful website in no time.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614c28510c18023aa01437e6_umso.png",
   "Category": "nocode",
   "URL": "https://www.umso.com",
   "Price": "Paid with Free Trial",
   "Keywords": "Umso,",
   "LikedBy" : []
   
 },
 {
   "Name": "Unbounce ",
   "Description": "Custom landing pages no coding required",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/6142eb73b1d6e6a3f363be5b_download.jpeg",
   "Category": "nocode",
   "URL": "https://www.palapa.co/",
   "Price": "Paid with Free Trial",
   "Keywords": "Unbounce ,",
   "LikedBy" : []
   
 },
 {
   "Name": "Unbox Social",
   "Description": "Unbox Social is a platform that helps brands and businesses analyse, compare, and create social media strategies, it offers three major features namely influencer marketing, competition tracking, and social media analytics. The bucket of features Unbox Social offers is sufficient for every brand wanting to make a mark on social media. The tool lets you use the features for all major social media platforms- Facebook, Twitter, Instagram, and YouTube. Be it established brands wanting to track their social media presence and competitors or newly launched brands wanting to improve their social media strategy, the tool is super useful, to say the least. Simply add your social media profiles which is easy to setup, and view all your current stats and compare channels, including your YouTube channel. Track your competitors YouTube accounts, as well as other social accounts, to see how they perform overtime. This also helps you reverse engineer their strategy.  You can also track influencers overtime to see how they perform.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e344accdb81409ef70_uc.png",
   "Category": "analytics",
   "URL": "https://www.unboxsocial.com/",
   "Price": "",
   "Keywords": "Unbox Social,Influencer Marketing, Competition Tracking, Social Media Analytics, Brand Tracking, Social Media reports",
   "LikedBy" : []
   
 },
 {
   "Name": "Unsplash",
   "Description": "Unsplash gives you beautiful, free images and photos that you can download and use for any project.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd2c2ce2bedd_Y1q97ccB_400x400.jpg",
   "Category": "createcontent",
   "URL": "https://unsplash.com/",
   "Price": "Freemium",
   "Keywords": "Unsplash,",
   "LikedBy" : []
   
 },
 {
   "Name": "Unstack",
   "Description": "Unstack is an all-in-one marketing platform that provides tools for creating and managing websites, landing pages, email campaigns, and more. The platform is designed to be user-friendly and easy to use, allowing businesses of all sizes to launch effective marketing campaigns without the need for technical expertise. You can build powerful websites and landing pages all through a drag-and-drop editor which is fully hosted on their end. Easily build a nicely designed landing page on mobile and desktop, add well-designed forms and more, backed with awesome analytics to understand how your pages are performing. There are also plenty of integrations to really bolster your website/LP performance.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97dfd75b0b399b260c92_uc.png",
   "Category": "nocode",
   "URL": "https://www.unstack.com/",
   "Price": "",
   "Keywords": "Unstack,Website Builder, Landing Page Builder, Email Marketing, CRM Integrations, Analytics",
   "LikedBy" : []
   
 },
 {
   "Name": "Upviral",
   "Description": "Upviral is an online platform designed to help businesses grow their customer base and increase their sales. It works by allowing users to create viral campaigns and automate their referral marketing strategies, they can also create customized contests and campaigns that reward customers for sharing their referral links with friends and family. It offers features like analytics and insights to help users better understand the performance of their campaigns and optimize their strategies, leaderboards, marketing automation such as emails and SMS, retargeting, social sharing and more.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a48e312d06344ed440f3_uc.png",
   "Category": "sales",
   "URL": "https://www.upviral.com/",
   "Price": "",
   "Keywords": "Upviral,Viral Campaigns, Automate, Referral Marketing, Analytics, Sales",
   "LikedBy" : []
   
 },
 {
   "Name": "Upwork",
   "Description": "Hire the world���������������",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/62e7e32fe8563a5852b5587b_upwork-fb.webp",
   "Category": "hire-talent",
   "URL": "http://www.upwork.com",
   "Price": "Freemium",
   "Keywords": "Upwork,",
   "LikedBy" : []
   
 },
 {
   "Name": "Use Proof ",
   "Description": "Use Proof Helps online business increase their leads and sales by showing real-time social proof, This platform has become one of the more popular Conversion rate optimization tools that I've seen more startups use, which can help boost your conversions across your site.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63e39dd80698865a954a0711_images.png",
   "Category": "analytics",
   "URL": "https://useproof.com/",
   "Price": "Paid",
   "Keywords": "Use Proof ,",
   "LikedBy" : []
   
 },
 {
   "Name": "UXPin",
   "Description": "UXPin, where design meets code and makes your prototypes come to life. it's a code-based design tool that merges design and engineering into one unified process. Thanks to conditional interactions, variables, state-based animations, and powerful expressions, you can build prototypes that feel like the real thing. In other words, anything that's on the web can be accurately prototyped in UXPin. you can do everything with the platform, from creating mockups, wireframes, design systems, prototyping and plenty more.Create pixel-perfect designs with existing designs systems your team has created. Get code components which you can then pass onto developers, as well as making sure your designs have good accessibility standards. Collaboration makes this tool really enjoyable. Share links to recieve feedback and comments about your designs.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e7ddc6792ffc58673a_uc.png",
   "Category": "analytics",
   "URL": "https://www.uxpin.com/",
   "Price": "",
   "Keywords": "UXPin,User experience design, Collaborative design, Design systems, Wireframing, Prototyping",
   "LikedBy" : []
   
 },
 {
   "Name": "Vamp",
   "Description": "Influencer marketing platform per industry",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e0fae42a7902418413c90_vamp-logo-colour-2021.png",
   "Category": "find-influencers",
   "URL": "https://vamp-brands.com",
   "Price": "Paid",
   "Keywords": "Vamp,",
   "LikedBy" : []
   
 },
 {
   "Name": "Viddyoze",
   "Description": "Viddyoze is a video making software designed to help you create and edit videos using custom templates. It enables video editors to design call to action (CTA) overlays and floating animations, share videos with clients, engage with target audiences, and render animations in multiple formats all that via a unified platform. You can create fantastic and professional looking videos in literally minutes or just a few clicks. You can find hundreds of templates to help you get kickstarted with the platform.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a48659c1786ac09d92e7_uc.png",
   "Category": "createcontent",
   "URL": "https://viddyoze.com/",
   "Price": "",
   "Keywords": "Viddyoze,Software, Video Making, Video Editing, Call to Actions, Custom Templates",
   "LikedBy" : []
   
 },
 {
   "Name": "Videopad",
   "Description": "VideoPad is a video-making solution that helps video editing professionals add visual effects and transitions to create 3D videos. The platform enables businesses to import music tracks, add text for captions, adjust video speed to create GIF videos and video stabilization functionality. it's fast and intuitive, which is great for anyone who's not an experienced editor. There are over 50 effects and transitions, as well as 60+ video formats, making it faster and easier to create awesome videos.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a4876588e83e50026cc8_uc.png",
   "Category": "createcontent",
   "URL": "https://www.nchsoftware.com/videopad/index.html",
   "Price": "",
   "Keywords": "Videopad,Video editing, Video production, Video composition, Video encoding, Video post-production.",
   "LikedBy" : []
   
 },
 {
   "Name": "VidIQ",
   "Description": "VidIQ is a SaaS product designed to help YouTube creators find topic and keywords for their videos. The tool also has a robust YouTube SEO feature set that assists with creating SEO-friendly titles, descriptions and tags  Being one of the more advanced tools out in the market for video creators, you can audit, do keyword research as well as use competitor tools to do further research. Some of the key features of VidIQ include keyword research tools, video optimization tools, channel and competitor analysis, and video performance tracking. It also provides insights into audience engagement and demographics, which can help creators tailor their content to better meet the needs of their viewers it's available as a browser extension for Google Chrome, Firefox, and other browsers",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e24b159a330be37162_uc.webp",
   "Category": "analytics",
   "URL": "https://vidiq.com/",
   "Price": "",
   "Keywords": "VidIQ,YouTube Optimization, Video Analytics,Audience Engagement, Keyword Research, Channel Growth",
   "LikedBy" : []
   
 },
 {
   "Name": "Vidyard",
   "Description": "You can record and send videos in just a few clicks ��������������������������� perfect for busy",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd8a46e2be78_7bD9LCBg_400x400.jpg",
   "Category": "sales",
   "URL": "https://vidyard.grsm.io/p150qzdcbw4f",
   "Price": "Free",
   "Keywords": "Vidyard,",
   "LikedBy" : []
   
 },
 {
   "Name": "Vimeo Create",
   "Description": "Vimeo Create is a video hosting and editing software, it enables anyone to create high-quality video experiences to connect better and bring ideas to life. Its features include a library of video templates, music tracks, sound effects, and stock footage, it also has text, transitions, camera motion, and color corrections so users can quickly and easily create videos with a high-quality look and feel. Everything you need to make and market amazing, impactful videos.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a487a4d6a7220ebced62_uc.png",
   "Category": "createcontent",
   "URL": "https://vimeo.com/create",
   "Price": "Paid",
   "Keywords": "Vimeo Create,Video Editing, Content Creation, Cinematography, Video Production, Collaboration",
   "LikedBy" : []
   
 },
 {
   "Name": "Viral Loops",
   "Description": "Viral Loops is a viral and referral marketing platform used to launch ranking competitions, sweepstakes, pre-launch and referral programs. It's a mechanism that drives continuous referrals for continuous growth. It consists of four key actions: Send, Spread, Click, and Convert, these actions allow for existing users of a platform to expose the platform to new ones on an external network, through referrals, content shares, etc., and then convert them to become users of the platform and start the loop again. Examples of companies that have successfully leveraged viral loops for growth include YouTube, LinkedIn, and Instagram. They also have some templates which are 'plug and play', that you can choose from to spur your creation, design landing pages and widgets and even analytics features to measure your campaign performance.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a48a2ea72720e90ca439_uc.png",
   "Category": "sales",
   "URL": "https://viral-loops.com/",
   "Price": "",
   "Keywords": "Viral Loops,Referral Marketing Platform, Content Marketing, Digital Analytics, Templates, Landing Pages",
   "LikedBy" : []
   
 },
 {
   "Name": "Viral Sweep",
   "Description": "Viralsweep is a digital sweepstakes and promotions platform designed to help businesses engage their customers through various promotional activities, it enables businesses to easily create and manage high-performing sweepstakes, contests, and giveaways. It comes with powerful features such as customizable entry forms, automated entry collection, upsells, referrals, and more. It also offers automated marketing and email campaigns, analytics, and insights to help businesses maximize the success of their campaigns. With its user-friendly interface, intuitive workflows, and extensive help resources.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a48e654b4339c21ce69a_uc.png",
   "Category": "sales",
   "URL": "https://www.viralsweep.com/",
   "Price": "",
   "Keywords": "Viral Sweep,Sweepstakes, Promotions, Giveaways, Lead Generation, Contests",
   "LikedBy" : []
   
 },
 {
   "Name": "ViralStat",
   "Description": "ViralStat is a comprehensive social media analytics tools it helps you to better understand the performance of your videos on social media platforms such as YouTube, Facebook, and Instagram, it also allows you to track various video metrics on these platforms, such as number of views, likes and dislikes (and how these change according to different videos), change in subscriber numbers, and overall viewer engagement. All of these metrics are collected and stored in one place. You can also make folders that contain lists of your competitors, as well as influencers, and companies within your industry. This allows you to spot trends in videos that perform well and badly, which enables you to improve your video strategy going forward. You can also create folders of videos you like and that inspire you, so you can get ideas on how to make your own video content better.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e39781ba0bca3e83f0_uc.png",
   "Category": "analytics",
   "URL": "https://viralstat.com/",
   "Price": "",
   "Keywords": "ViralStat,Social Media Monitoring, Customer Engagement, Brand Tracking, Analytics, Content Management",
   "LikedBy" : []
   
 },
 {
   "Name": "Visual Website Optimizer",
   "Description": "VMO is a popular web testing and conversion optimization platform that enables growing businesses to optimize their web experience across desktop, mobile, and other devices, to deliver a unique experience.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63e3bbacb7403560cf8d4197_VWO-Logo-Color.png",
   "Category": "analytics",
   "URL": "https://vwo.com/",
   "Price": "",
   "Keywords": "Visual Website Optimizer,",
   "LikedBy" : []
   
 },
 {
   "Name": "Voice.com",
   "Description": "Marketplace for Voice Over. Access the world's best professional voice actors.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/614e2700779115ae0a5591b3_voices-og-image.jpg",
   "Category": "hire-talent",
   "URL": "https://www.voices.com",
   "Price": "Paid",
   "Keywords": "Voice.com,",
   "LikedBy" : []
   
 },
 {
   "Name": "Voipfone",
   "Description": "VoiP phone provider. You can set up as many numbers as you want, you can add extensions, voice mail messages, customer hold music and even call queuing, record the calls and track all your activity",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63388b1b0a9495719e3b1abd_voipfone-1200px-logo.png",
   "Category": "automate",
   "URL": "https://www.voipfone.co.uk",
   "Price": "Paid",
   "Keywords": "Voipfone,",
   "LikedBy" : []
   
 },
 {
   "Name": "Vyper ai",
   "Description": "Vyper.ai is an all-in-one analytics and growth platform for e-commerce businesses. It's user friendly and provides insights into customer behavior, product performance, marketing campaigns, and helps optimize marketing strategies, it has features such as split testing, segmentation, and email automation, and it let's you build landing pages, has dashboard to track entries and referrals, ability to embed on your domain, Add your content, add media, your prizes/giveaways and more. Its goal is to provide valuable data insights to help its users make better decisions, increase sales, and drive growth.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a489897bcbefd432b64a_uc.webp",
   "Category": "analytics",
   "URL": "https://vyper.ai/",
   "Price": "",
   "Keywords": "Vyper ai,Analytics, E-commerce, Marketing Campaigns, Marketing Strategies, Landing Pages",
   "LikedBy" : []
   
 },
 {
   "Name": "Wask",
   "Description": "Within just the one platform, you can manage ads across Facebook and Instagram Ads, Google Ads, YouTube Ads through the dashboard. Quickly identify where channels are performing. As part of the tool, you can create ads, publish them and then of course manage and optimise. There's drag-and-drop functionality to create high-quality ads in minimal time, so you can focus on launching, testing and optimising for results. To really understand how things are performing, it has awesome smart audience, automatic smart suggestions, split-testing and more. It is designed to be simple, flexible, and easy to use with its provided feature Task Management, Time Tracking, Collaboration, Automated Publishing, Content Management, Post Scheduling, Analytics and Conversion Tracking.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97dd2dd15af3834bc690_uc.png",
   "Category": "analytics",
   "URL": "https://wask.co/",
   "Price": "",
   "Keywords": "Wask,Automated Publishing, Content Management, Post Scheduling, Analytics, Conversion Tracking",
   "LikedBy" : []
   
 },
 {
   "Name": "Webflow",
   "Description": "Design, build, and launch responsive websites ��������������������������� visually. Experience the power of HTML, CSS, an",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd7c3be2be4a_Tg7Mrqk2_400x400.png",
   "Category": "nocode",
   "URL": "https://webflow.grsm.io/44g54m6sx2q9",
   "Price": "Free package",
   "Keywords": "Webflow,",
   "LikedBy" : []
   
 },
 {
   "Name": "Weebly",
   "Description": "Weebly's free website builder makes it easy to create a website, blog, or online store.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd2f9fe2be4f_ajoQm8C7_400x400.png",
   "Category": "nocode",
   "URL": "https://www.weebly.com",
   "Price": "Free package",
   "Keywords": "Weebly,",
   "LikedBy" : []
   
 },
 {
   "Name": "Weglot ",
   "Description": "Expanding to new lands ? Weglot helps translate your website into as many languages as you want in just 5 minutes ����������������������������",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/62f3af1700236feda86aa546_weglot_logo4_bg-1024x1024.png",
   "Category": "automate",
   "URL": "https://weglot.com/?fp_ref=ghita32",
   "Price": "Paid with Free Trial",
   "Keywords": "Weglot ,",
   "LikedBy" : []
   
 },
 {
   "Name": "Weve",
   "Description": "Weve is an online meeting and event platform that focuses on employee engagement, company culture, team building, and fun!  It helps remote teams feel more connected with activities and games like trivia, categories, meme generator, lip-sync, photo booths, scavenger hunts, and so much more. And when it's time to get down to business, it allows you to easily switch into work mode for productive remote team meetings. The all-in-one video conferencing platform is great for hosting any type of company event or meeting and has amazing features including the ability to brand your events, a unique lobby/waiting room that encourages engagement, an event manager dashboard that helps businesses plan and organize their events, and more! Great for running events and easily swithcing between content and then activities for entertaining and keeping the audience engaged.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e6cfa2369127e15a8a_uc.svg",
   "Category": "community",
   "URL": "https://www.weve.co/",
   "Price": "",
   "Keywords": "Weve,Virtual team building, Group activities, Employee engagement, Fun and interactive, Remote work",
   "LikedBy" : []
   
 },
 {
   "Name": "WeVideo",
   "Description": "WeVideo is a cloud-based editing platform that allows users of all skill levels the opportunity to create professional-style videos, podcasts and more, it works in web browsers and on mobile devices. Its features include 720p video resolution, Motion titles, Screencasting, Cloud storage, Music library, Slow motion, Voiceover, Customizable environment, Green screen, Advanced text editing, File & media manager and Multi-track editing and storyboard. There's over 1 million stock images, videos and event tracks to add, all within the platform. It has as an easy-to-use interface where you chop, move, add content and lots more to create epic videos.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a4865cfb9eb3c78f49e4_uc.png",
   "Category": "createcontent",
   "URL": "https://www.wevideo.com/",
   "Price": "",
   "Keywords": "WeVideo,Video Editing, Video Creation, Video Production, Video Hosting",
   "LikedBy" : []
   
 },
 {
   "Name": "Wix",
   "Description": "Create a free website and customize anything with the Wix website builder���������",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd41bfe2be4e_tvOXJHAG_400x400.png",
   "Category": "nocode",
   "URL": "https://www.wix.com/",
   "Price": "Free package",
   "Keywords": "Wix,",
   "LikedBy" : []
   
 },
 {
   "Name": "Wonder",
   "Description": "Wonder is a platform for hosting virtual events that allow participants to connect and network with each other in a more spontaneous and organic way. Users creates virtual \"rooms\" where participants can move their avatar to interact with other attendees. These rooms can be customized to meet the needs of specific events, such as conferences, workshops, and networking events. Wonder provides a range of features that help to facilitate virtual networking, including the ability to see who is nearby, initiate one-on-one or group video calls, and share content. It also offers integration with other platforms such as Zoom, allowing organizers to provide a seamless experience for attendees. This is a useful tool for anyone looking to host a virtual event and create a more immersive and interactive experience for participants. Wonder has done a really good job with the experience of joining between 'circles' for groups focused on particular topics, you can easily go to new groups in seconds.With every circle, you can see quick icebreakers whenever you hover over a profile. People can screenshare presentations, as well as send messages at once to the circle, and more.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e64be55d6e8aa1e2f3_uc.png",
   "Category": "community",
   "URL": "https://www.wonder.me/",
   "Price": "",
   "Keywords": "Wonder,Virtual events, Virtual networking, Spontaneous interactions, Customizable rooms, Immersive experience",
   "LikedBy" : []
   
 },
 {
   "Name": "Woopra",
   "Description": "Woopra is a web analytics tool that works in real time. A key feature of Woopra is the visual journey maps, which makes it visually evident of how customers interact with different funnels and flows. Setting up the journey/flow steps you want within the interface is seamless and easy to use. You can segment further for a deeper breakdown of certain user groups, Analyse custom trend reports that illuminate areas of opportunities and bottlenecks you may not be aware of. Uncover users and flows that drive real revenue, see specific attributes such as locations, customer health scores and more that contribute to MRR/ARR. You can also in real-time track product errors or bugs which may disrupt customer experiences. The user profiles is really powerful to see specific individuals and how they engage with the product.Included as part of the analytics capabilities are retention reports. View short and long-term cohort analysis, and see how long/when users churn. Go deeper with segmentation and reasons for churn. There are also integrations with some of your favourite SaaS tools to setup workflows, as well as setting up automations from notifications of signups, to delegating tasks, reports and more.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e44be55d0162a1e2e1_uc.png",
   "Category": "analytics",
   "URL": "https://www.woopra.com/",
   "Price": "",
   "Keywords": "Woopra,Customer journey analytics, User behavior tracking, Customer segmentation, Real-time analytics, Marketing automation",
   "LikedBy" : []
   
 },
 {
   "Name": "Woorise",
   "Description": "Woorise is a social media marketing tool and management software that helps you connect with an audience, collect leads, and close sales, it's an ideal tool for businesses and e-commerce brands that want to increase sales and interest in their products.This tool is very much All-in-one, with it you can create conversion-optimised landing pages, quizzes, giveaways and lots more,they also have some good templates to choose from to speed up the process of competition creation there's also the option of collecting payments. All the referral mechanics are built in, so you don't need to worry about a thing.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a48de202f253cd8e0f05_uc.png",
   "Category": "sales",
   "URL": "https://woorise.com/",
   "Price": "Freemium",
   "Keywords": "Woorise,Giveaways and contests, Landing Pages, Quizzes, Social Media, Management",
   "LikedBy" : []
   
 },
 {
   "Name": "Wordmark it ",
   "Description": "Helps you choose which fonts looks best for your brand",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/615dde9303c37850ecf4ffe5_wordmark.jpg",
   "Category": "design",
   "URL": "https://wordmark.it",
   "Price": "Free package",
   "Keywords": "Wordmark it ,",
   "LikedBy" : []
   
 },
 {
   "Name": "Wordpress",
   "Description": "WordPress is a free and open-source content management system (CMS) that allows users to create and manage websites and blogs. It is written in PHP and uses a MySQL or MariaDB database. With it users can create websites and blogs using customizable themes and plugins. The platform is highly flexible and can be used for a wide range of applications, including e-commerce, news websites, personal blogs, and more.Whilst it can be at first hard to pickup, once you know the platform well, it's a powerful skill. Easily add widgets and plugins to take your site to the next level. There are lots of themes and visual builders, like Elementor, that can help you build great looking websites. Sometimes page builders make the site slow. Always check Google Pagespeed insights to see how themes affect speed of your pages.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e1fbdd77b766f0f488_uc.png",
   "Category": "nocode",
   "URL": "https://wordpress.org/",
   "Price": "",
   "Keywords": "Wordpress,Content management system, Website builder, Customizable themes, Extensible with plugins, Search engine optimization (SEO)",
   "LikedBy" : []
   
 },
 {
   "Name": "Wordtune",
   "Description": "Wordtune is your writing companion that understands what you���������������������������re trying to say, and suggests ways to make your writing more clear, compelling and authentic, whether you���������������������������re using it to write personal emails, create documents for your clients or exchange instant messages with your colleagues, Wordtune helps you express yourself better this advan",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97d606c5220930588a92_uc.png",
   "Category": "createcontent",
   "URL": "https://www.wordtune.com/",
   "Price": "",
   "Keywords": "Wordtune,Language editing, Rewriting, Content optimization, Writing efficiency",
   "LikedBy" : []
   
 },
 {
   "Name": "Workato",
   "Description": "Workato is an automation platform that helps users create custom workflows and integrations between their applications. It offers a wide range of features, from simple code-less setups to more complex development tools. With it users can automate complex processes, integrate data from multiple applications, and create a custom solution for their business needs this is an end-to-end solution for growing organisations who need serious automation capabilities.You can also create visual workflows that are really powerful, and intelligent enough to replace normal workers conducting those tasks. You can also incorporate smart bots to streamline processes, as well as advanced logic, branching and more.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63f8a48e3cad191b3f4070f9_uc.png",
   "Category": "automate",
   "URL": "https://www.workato.com/",
   "Price": "",
   "Keywords": "Workato,Automation, Integration, Cloud-based Platform, No-code Automation Tool, Business Process Automation",
   "LikedBy" : []
   
 },
 {
   "Name": "Writecream",
   "Description": "Writecream is a suite of AI-powered content creation tools that includes an AI Writer, an Image Generator, an Audio Generator, and a Content Generator, this tool is designed to help users generate high-quality content for a variety of purposes, such as blog posts, articles, and social media posts. The Image Generator tool allows users to create custom graphics and images for their content, while the Audio Generator tool allows users to create custom audio recordings for their content. The Content Generator tool provides users with a variety of content templates and ideas that they can use to generate high-quality content quickly and easily. Writecream is there to help users create high-quality content more quickly and easily, while also providing a range of media generation tools that can be used to enhance the quality and impact of their content.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97d68d6444733095e760_uc.png",
   "Category": "createcontent",
   "URL": "https://www.writecream.com/",
   "Price": "",
   "Keywords": "Writecream,Image generation,Audio generation,Content templates, AI Writer, Content Generation",
   "LikedBy" : []
   
 },
 {
   "Name": "Writesonic",
   "Description": "Writesonic is an AI-powered writing tool that helps users create high-quality content more efficiently, it uses natural language processing (NLP) and machine learning algorithms to analyze user input and generate high-quality, human-like language that matches the user's intended style and tone and offers a range of features to help users generate content for a variety of use cases, including ad copy, product descriptions, and blog articles, it also provides collaboration tools that allow users to work together on content creation, provide feedback, and track changes in real-time. Writesonic is designed to help users generate high-quality content more quickly and easily, while also providing collaboration and workflow tools to improve efficiency and productivity.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef87fa6fd458ef3a317948_uc.png",
   "Category": "createcontent",
   "URL": "https://writesonic.com/",
   "Price": "Paid with Free Trial",
   "Keywords": "Writesonic,Natural Language Processing, Content Creation, Workflow automation, AI Writing",
   "LikedBy" : []
   
 },
 {
   "Name": "Wufoo",
   "Description": "Wufoo's online form builder helps you create custom HTML forms without writing code.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd3ed6e2be5d_ZVzaIAW2_400x400.jpg",
   "Category": "community",
   "URL": "https://www.wufoo.com/",
   "Price": "Paid",
   "Keywords": "Wufoo,",
   "LikedBy" : []
   
 },
 {
   "Name": "YouCanBook",
   "Description": "YouCanBook is a simple online scheduling tool to eliminate the back and forth emails.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd976ce2bef0_Mgxe8-Ux_400x400.jpg",
   "Category": "collaboration",
   "URL": "https://youcanbook.me/",
   "Price": "Paid with Free Trial",
   "Keywords": "YouCanBook,",
   "LikedBy" : []
   
 },
 {
   "Name": "YouTube Keyword tool",
   "Description": "The YouTube Keyword tool (also known as YouTube Keyword Research tool) is a feature within VidIQ and other tools that helps video content creators find relevant and popular keywords to optimize their videos for YouTube search. With it users can enter a word or phrase related to their video content, and the tool will suggest other keywords and phrases that are frequently searched on YouTube, it can also provide data on search volume, competition, and other metrics that can help creators choose the best keywords to target. By using relevant and popular keywords in their video titles, tags, descriptions, and captions, content creators can increase their visibility in YouTube search results and attract more views and subscribers. The YouTube Keyword tool is a useful tool for optimizing video content and improving discoverability on the platform.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e24b159a330be37162_uc.webp",
   "Category": "analytics",
   "URL": "https://vidiq.com/",
   "Price": "",
   "Keywords": "YouTube Keyword tool,YouTube channel optimization, Video SEO, Audience analytics, Competitor analysis, Keyword tracking",
   "LikedBy" : []
   
 },
 {
   "Name": "YouTube Studio",
   "Description": "YouTube Studio is the home for creators. You can manage your presence, grow your channel, interact with your audience, and make money all in one place. You can also use YouTube Studio with the YouTube Studio app on your mobile device. Subscribe to the YouTube Creators channel for the latest news, updates, and tips. Everything you need to see the performance of your channel, edit videos and more is all in one centralised location, Organise videos into playlists, view the analytics of videos (i.e. average watch time, location, etc), add subtitles, review and reply to comments and more. Of course, a key feature is the monetisation section. See how much you're making based on your videos.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/63ef97e261bbf215b115bfaf_uc.jpeg",
   "Category": "analytics",
   "URL": "https://studio.youtube.com",
   "Price": "",
   "Keywords": "YouTube Studio,Content Creation, Management, Monetisation, Performance",
   "LikedBy" : []
   
 },
 {
   "Name": "Zapier",
   "Description": "Zapier lets you connect your apps and automate your workflow.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/613dc99d3d78bd6584e2bf00_zapier.jpg",
   "Category": "automate",
   "URL": "https://zapier.com/home",
   "Price": "Free package",
   "Keywords": "Zapier,",
   "LikedBy" : []
   
 },
 {
   "Name": "ZoomInfo",
   "Description": " The best B2B database and sales engagement platform. A must have for B2B companies.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/619caa30bebbf75861b0187d_ZoomInfo.jpg",
   "Category": "sales",
   "URL": "https://zoominfo.grsm.io/f3x8g1uch6fp",
   "Price": "Paid",
   "Keywords": "ZoomInfo,",
   "LikedBy" : []
   
 },
 {
   "Name": "Zopto",
   "Description": "Create multiple campaigns for different audiences and market segments. Program the whole cycle without any limitations using automated messaging and connecting.",
   "Icon": "https://uploads-ssl.webflow.com/613dc99d3d78bd6e24e2be40/6214b3d831c394d36ea0899c_logo-facebook.png",
   "Category": "sales",
   "URL": "https://zopto.com/#&utm_source=blog&utm_medium=infl&utm_content=hl&utm_campaign=techbible",
   "Price": "Paid",
   "Keywords": "Zopto,",
   "LikedBy" : []
   
 }
]);
