const questions = [
  {
    "type": "mcq",
    "category": "React",
    "question": "Which hook memoizes a computed value?",
    "options": ["useEffect", "useMemo", "useRef", "useCallback"],
    "answerIndex": 1,
    "explanation": "useMemo dependency changes ke hisaab se kisi value ko memoize karta hai."
  },
  {
    "type": "mcq",
    "category": "React",
    "question": "Which hook memoizes a function reference?",
    "options": ["useMemo", "useEffect", "useRef", "useCallback"],
    "answerIndex": 3,
    "explanation": "useCallback function ko memoize karta hai takay renders ke beech dobara create na ho."
  },
  {
    "type": "mcq",
    "category": "React",
    "question": "What triggers a React re-render?",
    "options": ["CSS changes", "State/props changes", "Console logs", "DOM events"],
    "answerIndex": 1,
    "explanation": "React state ya prop changes par re-render karta hai."
  },
  {
    "type": "theory",
    "category": "React",
    "question": "Explain reconciliation and the virtual DOM in React.",
    "expectedKeywords": ["diff", "virtual DOM", "reconciliation", "render", "update"],
    "modelAnswer": "React virtual DOM tree banata hai aur reconciliation ke dauraan iski previous tree se comparison karta hai, minimal real DOM updates nikalne ke liye, jisse performance improve hoti hai.",
    "explanation": "Reconciliation diffing algorithms use karta hai DOM updates ko efficient banane ke liye."
  },
  {
    "type": "mcq",
    "category": "React",
    "question": "Why use keys in lists?",
    "options": ["Styling", "Stable identity for diffing", "Event handling", "Accessibility"],
    "answerIndex": 1,
    "explanation": "Keys stable identity provide karte hain takay React list items ko sahi tarah reconcile kar sake."
  },
  {
    "type": "theory",
    "category": "React",
    "question": "Describe controlled vs uncontrolled components.",
    "expectedKeywords": ["controlled", "uncontrolled", "state", "input", "value", "ref"],
    "modelAnswer": "Controlled components ki value React state se control hoti hai aur onChange sync karta hai; uncontrolled components DOM par depend karte hain aur values read karne ke liye refs use karte hain.",
    "explanation": "Controlled explicit state management deta hai; uncontrolled simple hai lekin kam predictable."
  },
  {
    "type": "mcq",
    "category": "React",
    "question": "Where should expensive calculations be cached?",
    "options": ["useEffect", "useMemo", "useLayoutEffect", "useReducer"],
    "answerIndex": 1,
    "explanation": "useMemo computed results ko renders ke beech cache karta hai."
  },
  {
    "type": "mcq",
    "category": "React",
    "question": "What does useRef NOT trigger?",
    "options": ["Re-render", "Focus", "Scroll", "Measurement"],
    "answerIndex": 0,
    "explanation": "useRef.current ko update karne se re-render trigger nahi hota."
  },
  {
    "type": "mcq",
    "category": "Next.js",
    "question": "Which Next.js feature renders on the server at request time?",
    "options": ["SSG", "ISR", "SSR", "CSR"],
    "answerIndex": 2,
    "explanation": "SSR har request par server par HTML render karta hai."
  },
  {
    "type": "mcq",
    "category": "Next.js",
    "question": "What does SSG stand for in Next.js?",
    "options": ["Server-Side Generation", "Static Site Generation", "Streaming SSR", "Stateful Server Generation"],
    "answerIndex": 1,
    "explanation": "Static Site Generation compile time par pages build karta hai."
  },
  {
    "type": "mcq",
    "category": "Next.js",
    "question": "Which API supports Incremental Static Regeneration?",
    "options": ["getServerSideProps", "getStaticProps + revalidate", "useEffect", "getInitialProps"],
    "answerIndex": 1,
    "explanation": "getStaticProps mein revalidate Next.js 12/13 pages router mein ISR enable karta hai."
  },
  {
    "type": "theory",
    "category": "Next.js",
    "question": "Compare SSR, SSG, ISR and CSR, and when to use each.",
    "expectedKeywords": ["seo", "performance", "dynamic", "static", "cache"],
    "modelAnswer": "SSR dynamic content har request par serve karta hai; SSG static pages prebuild karta hai; ISR static pages ko schedule par update karta hai; CSR client par render karta hai. SSR personalized ya frequently updated data ke liye use karein, SSG static content ke liye, ISR content ke liye jo occasionally change hota hai, CSR highly interactive client-only features ke liye.",
    "explanation": "Trade-offs freshness, speed aur complexity ka balance karte hain."
  },
  {
    "type": "mcq",
    "category": "Next.js",
    "question": "In Next.js App Router, where do server components run?",
    "options": ["Browser", "Node server/runtime", "Service worker", "Edge only"],
    "answerIndex": 1,
    "explanation": "Server components server/runtime par execute hote hain aur kabhi client ko ship nahi hote."
  },
  {
    "type": "mcq",
    "category": "Next.js",
    "question": "Where do client components run?",
    "options": ["Server", "Browser", "Build time", "Database"],
    "answerIndex": 1,
    "explanation": "Client components browser mein run hote hain aur interactivity include karte hain."
  },
  {
    "type": "theory",
    "category": "Next.js",
    "question": "Explain data fetching in the App Router (fetch caching, revalidate, and Route Handlers).",
    "expectedKeywords": ["fetch", "cache", "revalidate", "server", "route handlers"],
    "modelAnswer": "App Router mein, fetch by default server components mein cached hota hai; revalidate freshness control karta hai; Route Handlers server-side APIs provide karte hain. Aap caching se opt-out kar sakte hain ya ISR jaise behavior ke liye revalidate intervals set kar sakte hain.",
    "explanation": "Caching aur revalidate freshness aur performance par granular control provide karte hain."
  },
  {
    "type": "mcq",
    "category": "State",
    "question": "Which is best for global state with derived selectors?",
    "options": ["Context only", "Redux Toolkit", "useState everywhere", "Mutable singletons"],
    "answerIndex": 1,
    "explanation": "Redux Toolkit predictable global state, immutability, aur selectors offer karta hai."
  },
  {
    "type": "theory",
    "category": "State",
    "question": "When would you prefer Context over Redux?",
    "expectedKeywords": ["small", "scoped", "theme", "auth", "no boilerplate"],
    "modelAnswer": "Context ko chhoti, scoped state ke liye use karein jaise theme ya auth jahan aapko complex reducers, middleware, ya devtools ki zaroorat nahi hai.",
    "explanation": "Context lightweight hai aur low-complexity global data ke liye ideal hai."
  },
  {
    "type": "mcq",
    "category": "State",
    "question": "What avoids prop drilling across deep trees?",
    "options": ["Lift state", "Context", "Refs", "Portals"],
    "answerIndex": 1,
    "explanation": "Context nested components ke liye accessible value provide karta hai bina prop drilling ke."
  },
  {
    "type": "mcq",
    "category": "State",
    "question": "Which pattern reduces re-render from wide Context usage?",
    "options": ["Single provider", "Selector-based contexts", "Global useEffect", "Inline functions"],
    "answerIndex": 1,
    "explanation": "Selector-based contexts ya contexts ko split karne se unnecessary re-renders kam hote hain."
  },
  {
    "type": "mcq",
    "category": "Performance",
    "question": "Which tool profiles React performance?",
    "options": ["Redux devtools", "React Profiler", "Lighthouse", "Jest"],
    "answerIndex": 1,
    "explanation": "React Profiler render timings aur commit phases ka analysis karta hai."
  },
  {
    "type": "theory",
    "category": "Performance",
    "question": "Outline strategies to prevent unnecessary re-renders.",
    "expectedKeywords": ["memo", "useMemo", "useCallback", "keys", "derived"],
    "modelAnswer": "Pure components ke liye React.memo use karein, values aur callbacks ko memoize karein, objects/arrays ko inline create karne se bachein, stable keys maintain karein, aur state derive karein duplicate karne ki bajaye.",
    "explanation": "Memoization aur good state design re-renders ko minimize karte hain."
  },
  {
    "type": "mcq",
    "category": "Performance",
    "question": "What improves long list rendering?",
    "options": ["map without keys", "Virtualization", "Inline styles", "Global state"],
    "answerIndex": 1,
    "explanation": "Virtualization libraries sirf visible rows render karti hain DOM work kam karne ke liye."
  },
  {
    "type": "mcq",
    "category": "Performance",
    "question": "Which image format is typically smaller with similar quality?",
    "options": ["JPEG", "PNG", "WebP", "BMP"],
    "answerIndex": 2,
    "explanation": "WebP often chhoti files same quality par provide karta hai."
  },
  {
    "type": "theory",
    "category": "Performance",
    "question": "Explain code-splitting and route-based chunking in Next.js.",
    "expectedKeywords": ["dynamic import", "lazy", "bundle", "route", "chunk"],
    "modelAnswer": "Code-splitting sirf current route ke liye zaroori code load karta hai dynamic import aur automatic route-based chunking ke zariye Next.js mein, jisse initial payload kam hota hai aur TTI improve hota hai.",
    "explanation": "Smaller initial bundles lead to faster starts."
  },
  {
    "type": "mcq",
    "category": "Accessibility",
    "question": "Which attribute provides text alternatives for images?",
    "options": ["title", "placeholder", "alt", "aria-label"],
    "answerIndex": 2,
    "explanation": "alt attribute screen readers ko image ka matlab batata hai."
  },
  {
    "type": "theory",
    "category": "Accessibility",
    "question": "How do you ensure keyboard accessibility?",
    "expectedKeywords": ["tab order", "focus", "skip links", "semantic", "aria"],
    "modelAnswer": "Semantic elements use karein, focus manage karein, visible focus states ensure karein, logical tab order provide karein, skip links add karein, aur zaroorat par appropriate ARIA roles use karein.",
    "explanation": "Keyboard access bahut se users aur QA ke liye zaroori hai."
  },
  {
    "type": "mcq",
    "category": "Routing",
    "question": "Which Next.js component links between routes?",
    "options": ["a", "Link", "Navigate", "Router"],
    "answerIndex": 1,
    "explanation": "Next.js Link component prefetch aur navigate karne ke liye use karta hai."
  },
  {
    "type": "mcq",
    "category": "Forms",
    "question": "Which library simplifies form state and validation?",
    "options": ["Axios", "React Hook Form", "Redux", "Jest"],
    "answerIndex": 1,
    "explanation": "React Hook Form forms ke liye lightweight aur performant hai."
  },
  {
    "type": "theory",
    "category": "Forms",
    "question": "Explain client-side vs server-side validation layering.",
    "expectedKeywords": ["UX", "security", "sanitize", "constraints", "error messages"],
    "modelAnswer": "Client-side validation immediate feedback aur UX provide karta hai, lekin server-side validation security ke liye authoritative rehta hai; inputs sanitize karein, constraints enforce karein, aur clear messages return karein.",
    "explanation": "Trust but verify: server source of truth hai."
  },
  {
    "type": "mcq",
    "category": "Data",
    "question": "Which Next.js function fetches data at build time?",
    "options": ["getServerSideProps", "getStaticProps", "fetch in useEffect", "getInitialProps"],
    "answerIndex": 1,
    "explanation": "getStaticProps build time par run hota hai pages pre-render karne ke liye."
  },
  {
    "type": "mcq",
    "category": "Data",
    "question": "Which improves network resilience?",
    "options": ["No timeout", "Exponential backoff", "Disable caching", "Nested awaits"],
    "answerIndex": 1,
    "explanation": "Exponential backoff transient failures mein madad karta hai."
  },
  {
    "type": "theory",
    "category": "Data",
    "question": "Discuss caching strategies for Next.js data fetching.",
    "expectedKeywords": ["stale-while-revalidate", "etag", "revalidate", "edge", "cdn"],
    "modelAnswer": "HTTP cache headers (ETag, Cache-Control) use karein, ISR ke liye Next.js revalidate use karein, client caching ke liye SWR use karein, aur global delivery ke liye CDN layer use karein.",
    "explanation": "Layered caching speed aur scalability improve karti hai."
  },
  {
    "type": "mcq",
    "category": "Testing",
    "question": "Which tool tests React components?",
    "options": ["Lighthouse", "React Testing Library", "Webpack", "ESLint"],
    "answerIndex": 1,
    "explanation": "React Testing Library user interactions ke zariye testing encourage karta hai."
  },
  {
    "type": "mcq",
    "category": "Testing",
    "question": "Which checks performance, PWA, and SEO?",
    "options": ["Jest", "Lighthouse", "Vitest", "Storybook"],
    "answerIndex": 1,
    "explanation": "Lighthouse performance, accessibility, SEO, aur PWA ki audit karta hai."
  },
  {
    "type": "theory",
    "category": "Testing",
    "question": "How do you test SSR/SSG pages effectively?",
    "expectedKeywords": ["integration", "mocks", "e2e", "render", "data"],
    "modelAnswer": "Integration tests use karein jo mocked data ke saath pages render karte hain, HTML output verify karein, aur routing, dynamic params, aur hydration ke liye end-to-end tests use karein.",
    "explanation": "SSR/SSG testing unit/integration ko E2E coverage ke saath mix karta hai."
  },
  {
    "type": "mcq",
    "category": "Styling",
    "question": "Which approach offers atomic class utilities?",
    "options": ["CSS Modules", "Styled Components", "Tailwind CSS", "Sass"],
    "answerIndex": 2,
    "explanation": "Tailwind composable utility-first classes provide karta hai."
  },
  {
    "type": "mcq",
    "category": "Styling",
    "question": "CSS Modules scope styles to what?",
    "options": ["Global document", "Component file", "Namespace", "Inline tag"],
    "answerIndex": 1,
    "explanation": "CSS Modules importing component ke liye styles scope karte hain."
  },
  {
    "type": "theory",
    "category": "Styling",
    "question": "Explain pros/cons of CSS-in-JS in React.",
    "expectedKeywords": ["scoping", "runtime", "bundle", "theming", "SSR"],
    "modelAnswer": "Pros: scoped styles, theming, developer experience. Cons: runtime overhead, compile na karne par larger bundles, potential SSR complexity.",
    "explanation": "Performance needs aur team familiarity ke hisaab se choose karein."
  },
  {
    "type": "mcq",
    "category": "Security",
    "question": "Which header mitigates XSS by controlling allowed sources?",
    "options": ["ETag", "CSP", "Accept", "DNT"],
    "answerIndex": 1,
    "explanation": "Content-Security-Policy resource origins ko restrict karta hai, XSS ko mitigate karta hai."
  },
  {
    "type": "mcq",
    "category": "Security",
    "question": "Which prevents CSRF in form submissions?",
    "options": ["CORS", "CSRF token", "ETag", "SPDY"],
    "answerIndex": 1,
    "explanation": "CSRF token server-side validate hone se cross-site request forgery ko prevent karta hai."
  },
  {
    "type": "theory",
    "category": "Security",
    "question": "How do you avoid XSS in React/Next.js?",
    "expectedKeywords": ["escape", "sanitize", "dangerouslySetInnerHTML", "CSP", "input"],
    "modelAnswer": "dangerouslySetInnerHTML se bachein jab tak sanitize na ho, user content escape karein, CSP apply karein, inputs validate/sanitize karein, aur safe React bindings prefer karein.",
    "explanation": "Most XSS issues unsafe HTML injection se originate hote hain."
  },
  {
    "type": "mcq",
    "category": "Errors",
    "question": "Which React feature catches rendering errors in descendants?",
    "options": ["Error Boundary", "Suspense", "Portal", "Ref"],
    "answerIndex": 0,
    "explanation": "Error Boundaries rendering lifecycle ke dauraan errors catch karte hain."
  },
  {
    "type": "theory",
    "category": "Errors",
    "question": "Outline an incident response for a production bug in Next.js.",
    "expectedKeywords": ["rollback", "feature flag", "logs", "monitoring", "postmortem"],
    "modelAnswer": "Rollback ya feature flags ke zariye mitigate karein, logs/metrics collect karein, status communicate karein, root cause fix karein, aur action items ke saath postmortem likhein.",
    "explanation": "Structured response MTTR kam karta hai aur recurrences prevent karta hai."
  },
  {
    "type": "mcq",
    "category": "Rendering",
    "question": "What is hydration in React/Next.js?",
    "options": ["Server caching", "Binding client to server-rendered HTML", "Database sync", "WebSocket init"],
    "answerIndex": 1,
    "explanation": "Hydration client par server-rendered HTML se event listeners attach karta hai."
  },
  {
    "type": "mcq",
    "category": "Rendering",
    "question": "Which avoids hydration mismatch?",
    "options": ["Random IDs on server", "Consistent content and use client", "Disable SSR", "Always CSR"],
    "answerIndex": 1,
    "explanation": "Consistent markup ensure karein aur client-only ko 'use client' ya dynamic import se isolate karein."
  },
  {
    "type": "theory",
    "category": "Rendering",
    "question": "When would you use streaming SSR?",
    "expectedKeywords": ["TTFB", "progressive", "suspense", "large", "latency"],
    "modelAnswer": "Streaming SSR slow data sources ya large content wale pages ke liye progressive HTML send karne ke liye use karein, TTFB aur perceived speed improve karne ke liye.",
    "explanation": "Streaming partial content ko jaldi deliver karta hai UX improve karne ke liye."
  },
  {
    "type": "mcq",
    "category": "API",
    "question": "Which HTTP header validates cache freshness via ETags?",
    "options": ["If-None-Match", "Authorization", "Accept", "Content-Type"],
    "answerIndex": 0,
    "explanation": "If-None-Match ETag ko wapis bhejta hai content change check karne ke liye."
  },
  {
    "type": "mcq",
    "category": "API",
    "question": "Which response code indicates resource not modified?",
    "options": ["200", "201", "304", "404"],
    "answerIndex": 2,
    "explanation": "304 Not Modified batata hai ke client apni cached version use kar sakta hai."
  },
  {
    "type": "theory",
    "category": "API",
    "question": "Design a resilient data-fetching layer for Next.js.",
    "expectedKeywords": ["retry", "timeout", "cache", "fallback", "monitoring"],
    "modelAnswer": "Timeouts implement karein, backoff ke saath retries implement karein, SWR ya HTTP ke zariye caching implement karein, partial data ke liye fallbacks provide karein, aur regressions detect karne ke liye monitoring implement karein.",
    "explanation": "Network robustness failures ke under better UX ensure karta hai."
  },
  {
    "type": "mcq",
    "category": "Tooling",
    "question": "Which tool bundles a Next.js app?",
    "options": ["Rollup", "Webpack", "Parcel", "Gulp"],
    "answerIndex": 1,
    "explanation": "Next.js Webpack use karta hai (ya newer versions mein Turbopack)."
  },
  {
    "type": "mcq",
    "category": "Tooling",
    "question": "Which lint tool enforces code quality?",
    "options": ["Prettier", "ESLint", "Stylelint", "TSLint"],
    "answerIndex": 1,
    "explanation": "ESLint JS/TS projects mein code quality rules enforce karta hai."
  },
  {
    "type": "theory",
    "category": "Tooling",
    "question": "How do you reduce bundle size in React/Next.js?",
    "expectedKeywords": ["tree shaking", "dynamic import", "analyze", "remove polyfills", "images"],
    "modelAnswer": "Code splitting use karein, tree shaking use karein, bundles analyze karein, unnecessary polyfills remove karein, libs deduplicate karein, images compress karein, aur CDN caching leverage karein.",
    "explanation": "Smaller bundles load times aur Core Web Vitals improve karte hain."
  },
  {
    "type": "theory",
    "category": "Problem-Solving",
    "question": "Homepage is slow in production; what steps do you take?",
    "expectedKeywords": ["profile", "metrics", "lighthouse", "optimize", "cache"],
    "modelAnswer": "Lighthouse aur profiling ke saath measure karein, bottlenecks identify karein (images, blocking JS), code-splitting implement karein, images optimize karein, caching tune karein, aur deploy ke baad monitor karein.",
    "explanation": "Data-driven optimization guesswork se bachata hai."
  },
  {
    "type": "theory",
    "category": "Problem-Solving",
    "question": "Real-time chat shows occasional message ordering issues; propose a fix.",
    "expectedKeywords": ["timestamp", "server order", "idempotent", "queue", "reconciliation"],
    "modelAnswer": "Server-authoritative timestamps aur ordering use karein, idempotent message IDs use karein, client par reconcile karein, aur eventual consistency race conditions resolve karne ke liye use karein.",
    "explanation": "Consistency ke liye server ordering aur client reconciliation zaroori hai."
  },
  {
    "type": "mcq",
    "category": "JavaScript",
    "question": "What does Array.map return?",
    "options": ["Mutated array", "New array", "Iterator", "Promise"],
    "answerIndex": 1,
    "explanation": "map original ko mutate kiye bina naya array return karta hai."
  },
  {
    "type": "mcq",
    "category": "JavaScript",
    "question": "Which keyword defines block scope?",
    "options": ["var", "let", "function", "with"],
    "answerIndex": 1,
    "explanation": "let (aur const) block-scoped variables define karte hain."
  },
  {
    "type": "theory",
    "category": "JavaScript",
    "question": "Explain closures and a practical React use-case.",
    "expectedKeywords": ["lexical", "scope", "retain", "inner", "outer"],
    "modelAnswer": "Closures outer scope se variables capture karte hain; React mein ye callbacks mein stateful values retain karne mein madad karte hain bina prop drilling ke.",
    "explanation": "Closures many JS patterns ke underpin hain jo React mein use hote hain."
  },
  {
    "type": "mcq",
    "category": "CSS",
    "question": "Which selector has highest specificity?",
    "options": ["Element", "Class", "ID", "Universal"],
    "answerIndex": 2,
    "explanation": "ID selectors class aur element selectors se outrank karte hain."
  },
  {
    "type": "mcq",
    "category": "CSS",
    "question": "Which property creates a new stacking context?",
    "options": ["position: static", "z-index on positioned", "display: block", "margin"],
    "answerIndex": 1,
    "explanation": "Positioned elements with z-index kuch cases mein stacking contexts create karte hain."
  },
  {
    "type": "theory",
    "category": "CSS",
    "question": "How do you implement responsive images?",
    "expectedKeywords": ["srcset", "sizes", "picture", "webp", "lazy"],
    "modelAnswer": "Responsive images ke liye srcset aur sizes use karein, art direction aur formats jaise WebP/AVIF ke liye picture use karein, aur offscreen images defer karne ke liye lazy loading use karein.",
    "explanation": "Responsive images bandwidth cut karte hain aur speed improve karte hain."
  },
  {
    "type": "mcq",
    "category": "i18n",
    "question": "Which formats help pluralization rules?",
    "options": ["JSON only", "ICU MessageFormat", "CSV", "YAML"],
    "answerIndex": 1,
    "explanation": "ICU MessageFormat pluralization aur rich text patterns support karta hai."
  },
  {
    "type": "theory",
    "category": "i18n",
    "question": "How would you internationalize a Next.js site?",
    "expectedKeywords": ["routing", "locale", "messages", "fallback", "format"],
    "modelAnswer": "Locale-aware routing use karein, per locale messages load karein, dates/numbers format karein, aur fallbacks provide karein. Libraries jaise next-intl ya FormatJS isko simplify karte hain.",
    "explanation": "Localization routing, content, aur formatting ko span karta hai."
  },
  {
    "type": "mcq",
    "category": "Monitoring",
    "question": "Which tracks front-end errors in production?",
    "options": ["Jest", "Sentry", "ESLint", "Cypress"],
    "answerIndex": 1,
    "explanation": "Sentry production mein errors aur performance traces capture karta hai."
  },
  {
    "type": "theory",
    "category": "Monitoring",
    "question": "Outline key metrics for a Next.js app.",
    "expectedKeywords": ["Core Web Vitals", "TTFB", "FCP", "CLS", "error rate"],
    "modelAnswer": "Core Web Vitals (LCP, FID/INP, CLS), TTFB, error rate, API latency, aur user journey funnels track karein regressions detect karne ke liye.",
    "explanation": "Metrics optimization aur reliability work guide karte hain."
  },
  {
    "type": "mcq",
    "category": "Auth",
    "question": "Which spec describes token-based auth used in SPAs?",
    "options": ["SOAP", "JWT", "XML-RPC", "SMTP"],
    "answerIndex": 1,
    "explanation": "JWTs stateless token-based auth ke liye commonly use hote hain."
  },
  {
    "type": "theory",
    "category": "Auth",
    "question": "How do you protect SSR pages behind auth?",
    "expectedKeywords": ["session", "cookie", "redirect", "middleware", "server"],
    "modelAnswer": "Server-side session cookies read karein (middleware ya getServerSideProps mein), validate karein, aur unauthenticated users ko redirect karein; APIs ko similarly protect karein.",
    "explanation": "SSR auth checks rendering se pehle server-side hote hain."
  },
  {
    "type": "mcq",
    "category": "Real-Time",
    "question": "Which protocol enables full-duplex communication?",
    "options": ["HTTP/1.1", "HTTP/2", "WebSocket", "FTP"],
    "answerIndex": 2,
    "explanation": "WebSockets persistent two-way communication provide karte hain."
  },
  {
    "type": "theory",
    "category": "Real-Time",
    "question": "Design a presence indicator for a Next.js collaborative app.",
    "expectedKeywords": ["heartbeat", "subscription", "disconnect", "debounce", "broadcast"],
    "modelAnswer": "WebSocket ya pub/sub ke saath heartbeat ping use karein, updates debounce karein, grace periods ke baad disconnects mark karein, aur presence changes subscribers ko broadcast karein.",
    "explanation": "Presence robust session aur network handling ki zaroorat hai."
  },
  {
    "type": "mcq",
    "category": "Caching",
    "question": "Which cache policy allows using stale while fetching fresh?",
    "options": ["no-store", "max-age=0", "stale-while-revalidate", "no-cache"],
    "answerIndex": 2,
    "explanation": "stale-while-revalidate fresh content fetch karte hue stale serve karta hai."
  },
  {
    "type": "theory",
    "category": "Caching",
    "question": "Describe a CDN strategy for Next.js images and pages.",
    "expectedKeywords": ["edge", "etag", "cache-control", "immutable", "purge"],
    "modelAnswer": "Static assets CDN ke zariye serve karein, strong cache headers set karein, ETags use karein, hashed assets ke liye immutable use karein, aur zaroorat par deploy par purge karein.",
    "explanation": "CDN traffic offload karta hai aur globally latency reduce karta hai."
  },
  {
    "type": "mcq",
    "category": "CI/CD",
    "question": "Which step should run before deploy?",
    "options": ["Skip tests", "Run tests and lint", "Disable builds", "Ignore errors"],
    "answerIndex": 1,
    "explanation": "Ship karne se pehle issues catch karne ke liye tests aur lint run karein."
  },
  {
    "type": "theory",
    "category": "CI/CD",
    "question": "How do you implement feature flags safely?",
    "expectedKeywords": ["toggle", "kill switch", "gradual", "config", "experiment"],
    "modelAnswer": "Kill switch ke saath flag system use karein, gradual rollouts use karein, server-controlled configuration use karein, aur jaldi revert karne ke liye observability use karein.",
    "explanation": "Flags deploy ko release se decouple karte hain safety ke liye."
  },
  {
    "type": "mcq",
    "category": "Media",
    "question": "Which Next.js component optimizes images?",
    "options": ["img", "Image", "Picture", "Media"],
    "answerIndex": 1,
    "explanation": "Next.js Image component optimization aur responsive loading handle karta hai."
  },
  {
    "type": "mcq",
    "category": "Media",
    "question": "Which attribute defers offscreen images?",
    "options": ["loading=lazy", "decoding=async", "preload", "poster"],
    "answerIndex": 0,
    "explanation": "loading=lazy images ko defer karta hai jab tak woh viewport ke qareeb na ho."
  },
  {
    "type": "mcq",
    "category": "React",
    "question": "Which avoids prop drilling to portals?",
    "options": ["Context", "Portals", "Refs", "Keys"],
    "answerIndex": 0,
    "explanation": "Context data pass karne ke liye hai; portals sirf render target change karte hain."
  },
  {
    "type": "mcq",
    "category": "React",
    "question": "Which lifecycle-equivalent runs after paint?",
    "options": ["useEffect", "useLayoutEffect", "useMemo", "useCallback"],
    "answerIndex": 0,
    "explanation": "useEffect paint ke baad run hota hai; layout effect pehle synchronously run hota hai."
  },
  {
    "type": "theory",
    "category": "React",
    "question": "Explain Suspense usage for data fetching.",
    "expectedKeywords": ["fallback", "boundary", "stream", "async", "loading"],
    "modelAnswer": "Suspense boundaries fallback UIs show karte hain jab data load ho raha ho; streaming ke saath coupled, ye content progressively reveal karte hain.",
    "explanation": "Suspense smoother loading states enable karta hai."
  },
  {
    "type": "mcq",
    "category": "SEO",
    "question": "Which rendering improves SEO for content pages?",
    "options": ["CSR only", "SSR/SSG", "WebSocket", "Canvas"],
    "answerIndex": 1,
    "explanation": "SSR/SSG crawlers ke liye HTML render karte hain, SEO improve karte hain."
  },
  {
    "type": "theory",
    "category": "SEO",
    "question": "How to implement meta tags and Open Graph in Next.js?",
    "expectedKeywords": ["Head", "metadata", "title", "description", "og"],
    "modelAnswer": "Head component ya metadata API use karein title, description, OG/Twitter tags, aur per-route canonical URLs set karne ke liye.",
    "explanation": "Accurate metadata discoverability aur sharing improve karta hai."
  },
  {
    "type": "mcq",
    "category": "Workers",
    "question": "Which moves computation off the main thread?",
    "options": ["setTimeout", "Web Workers", "Promise", "Event loop"],
    "answerIndex": 1,
    "explanation": "Web Workers UI se separate thread mein code run karte hain."
  },
  {
    "type": "theory",
    "category": "Workers",
    "question": "When would you use a Web Worker in React?",
    "expectedKeywords": ["heavy", "parse", "compute", "image", "block"],
    "modelAnswer": "Heavy parsing/processing (e.g., JSON, images) ke liye workers use karein rendering aur interaction block hone se bachne ke liye.",
    "explanation": "Workers UI ko heavy tasks ke under responsive rakhte hain."
  },
  {
    "type": "mcq",
    "category": "Next.js",
    "question": "Which enables middleware at the edge?",
    "options": ["getStaticProps", "next/server", "next-auth", "Image"],
    "answerIndex": 1,
    "explanation": "Middleware routing aur auth ke liye edge par run karne ke liye next/server use karta hai."
  },
  {
    "type": "theory",
    "category": "Next.js",
    "question": "Explain Route Handlers vs API routes.",
    "expectedKeywords": ["app router", "file-based", "server", "edge", "stream"],
    "modelAnswer": "App Router mein Route Handlers per route segment ke liye server-side functions provide karte hain, edge par run ho sakte hain, aur streaming ke saath integrate ho sakte hain; API routes Pages Router equivalent hain.",
    "explanation": "Handlers server code ko modern routing ke saath unify karte hain."
  },
  {
    "type": "mcq",
    "category": "DX",
    "question": "Which tool improves code formatting consistency?",
    "options": ["Prettier", "Jest", "Vitest", "Cypress"],
    "answerIndex": 0,
    "explanation": "Prettier automatically consistent code style enforce karta hai."
  },
  {
    "type": "theory",
    "category": "DX",
    "question": "How do you structure a scalable Next.js project?",
    "expectedKeywords": ["modules", "features", "shared", "types", "tests"],
    "modelAnswer": "Feature modules ke hisaab se organize karein, shared components/utilities ko isolated rakhein, types centrally define karein, per feature tests maintain karein, aur linting/pre-commit hooks configure karein.",
    "explanation": "Good structure growth support karta hai aur friction reduce karta hai."
  },
  {
    "type": "mcq",
    "category": "Debugging",
    "question": "Which browser tool inspects network requests?",
    "options": ["Elements", "Console", "Network panel", "Sources"],
    "answerIndex": 2,
    "explanation": "Network panel requests, timing, aur payloads show karta hai."
  },
  {
    "type": "theory",
    "category": "Debugging",
    "question": "SSR page renders blank intermittently; how do you debug?",
    expectedKeywords: ["logs", "hydration", "error boundary", "cache", "dev/prod"],
    "modelAnswer": "Server logs check karein, hydration mismatches verify karein, error boundaries add karein, caching aur revalidate settings inspect karein, aur dev vs prod behavior compare karein.",
    "explanation": "Systematic debugging SSR/hydration issues ko quickly isolate karta hai."
  },
  {
    "type": "mcq",
    "category": "React",
    "question": "Which hook reads the previous props/state after render?",
    "options": ["usePrevious", "useRef", "useReducer", "useId"],
    "answerIndex": 1,
    "explanation": "Ek ref previous values ko renders ke across store kar sakta hai."
  },
  {
    "type": "mcq",
    "category": "Next.js",
    "question": "Which directory contains server components by default in App Router?",
    "options": ["components", "app", "pages", "public"],
    "answerIndex": 1,
    "explanation": "app/ ke andar ki files by default server components hain jab tak 'use client' na ho."
  },
  {
    "type": "theory",
    "category": "React",
    "question": "Describe useReducer and when to prefer it over useState.",
    "expectedKeywords": ["complex", "multiple", "actions", "predictable", "testable"],
    "modelAnswer": "useReducer complex state transitions ke liye suitable hai multiple actions aur predictable updates ke saath, testability improve karta hai aur logic ko view se separate karta hai.",
    "explanation": "Reducers intricate state ke liye behtar scale karte hain."
  },
  {
    "type": "mcq",
    "category": "Next.js",
    "question": "Which file defines application-level layout in App Router?",
    "options": ["_app.js", "layout.js", "document.js", "config.js"],
    "answerIndex": 1,
    "explanation": "App Router mein layout.js kisi route segment ke liye shared UI define karta hai."
  },
  {
    "type": "mcq",
    "category": "Next.js",
    "question": "Which component manages HTML head metadata in App Router?",
    "options": ["Head", "Metadata API", "Helmet", "Title"],
    "answerIndex": 1,
    "explanation": "App Router mein head tags ke liye Metadata API use karein."
  },
  {
    "type": "theory",
    "category": "Next.js",
    "question": "How do you handle environment variables securely?",
    "expectedKeywords": [".env", "server-only", "public prefix", "secrets", "process.env"],
    "modelAnswer": "Secrets env files ya platform configs mein store karein, sirf variables ko NEXT_PUBLIC prefix ke saath clients ko expose karein, aur server-only vars ko server code mein access karein.",
    "explanation": "Client bundle mein secrets leak hone se bachein."
  },
  {
    "type": "mcq",
    "category": "React",
    "question": "Which hook generates stable IDs that avoid hydration mismatch?",
    "options": ["useId", "useEffect", "useMemo", "useRef"],
    "answerIndex": 0,
    "explanation": "useId server aur client ke beech consistent IDs generate karta hai."
  },
  {
    "type": "mcq",
    "category": "React",
    "question": "Which API creates portals?",
    "options": ["createPortal", "createRoot", "hydrateRoot", "renderPortal"],
    "answerIndex": 0,
    "explanation": "createPortal children ko different DOM subtree mein render karta hai."
  },
  {
    "type": "theory",
    "category": "React",
    "question": "Explain React keys for dynamic lists with insertions and deletions.",
    "expectedKeywords": ["stable", "unique", "index pitfalls", "reconcile", "performance"],
    "modelAnswer": "Stable unique keys use karein jo reorders ke across persist karein. Array indices se bachein jab items insert/delete ho sakte hain kyunki woh incorrect reconciliation ka sabab bante hain.",
    "explanation": "Stable keys visual bugs aur state leaks prevent karte hain."
  }
]

export default questions;