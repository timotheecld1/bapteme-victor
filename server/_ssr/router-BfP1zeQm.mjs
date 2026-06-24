import { n as __toESM } from "../_runtime.mjs";
import { a as require_react, o as require_jsx_runtime, r as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { a as createRouter, c as createFileRoute, d as useRouter, l as createRootRouteWithContext, n as Scripts, o as Outlet, r as HeadContent, s as lazyRouteComponent, u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BfP1zeQm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BsZxgtAx.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "Cette page s'est envolée…"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "smallcaps text-sm text-primary hover:underline",
						children: "Retour à l'accueil"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl",
					children: "Oups…"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Quelque chose n'a pas fonctionné. Vous pouvez réessayer ou revenir à l'accueil."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90",
						children: "Réessayer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-md border border-input bg-background px-4 py-2 text-sm hover:bg-accent",
						children: "Accueil"
					})]
				})
			]
		})
	});
}
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Baptême de Victor — 6 Juin 2026" },
			{
				name: "description",
				content: "Le site souvenir du baptême de Victor : livre d'or, album photo et un mot pour la famille."
			},
			{
				property: "og:title",
				content: "Baptême de Victor — 6 Juin 2026"
			},
			{
				property: "og:description",
				content: "Livre d'or, album photo et souvenirs du baptême de Victor."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Allura&family=Inter:wght@400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "fr",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function SiteHeader() {
	const linkBase = "smallcaps text-sm font-semibold text-foreground hover:text-primary transition-colors";
	const activeProps = { className: `${linkBase} text-primary underline underline-offset-8 decoration-2` };
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "flex items-baseline gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "smallcaps text-sm font-semibold text-foreground",
					children: "Baptême de"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "script text-3xl text-primary leading-none",
					children: "Victor"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex items-center gap-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: linkBase,
						activeOptions: { exact: true },
						activeProps,
						children: "Accueil"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/livre-d-or",
						className: linkBase,
						activeProps,
						children: "Livre d'or"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/album",
						className: linkBase,
						activeProps,
						children: "Album"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/cadeau",
						className: linkBase,
						activeProps,
						children: "Cadeau"
					})
				]
			})]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-24 border-t border-border/50 py-8 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "smallcaps text-xs text-muted-foreground",
			children: "Avec tout notre amour — Famille Lecarpentier Leon-Dufour"
		})
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		})
	});
}
var $$splitComponentImporter$3 = () => import("./livre-d-or-BClP9KD2.mjs");
var Route$3 = createFileRoute("/livre-d-or")({
	head: () => ({ meta: [
		{ title: "Livre d'or — Baptême de Victor" },
		{
			name: "description",
			content: "Laissez un mot doux pour Victor et lisez les messages de ses proches."
		},
		{
			property: "og:title",
			content: "Livre d'or — Baptême de Victor"
		},
		{
			property: "og:description",
			content: "Laissez un mot doux pour Victor."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./cadeau-BEKT_wEv.mjs");
var Route$2 = createFileRoute("/cadeau")({
	head: () => ({ meta: [
		{ title: "Un cadeau pour Victor — Baptême" },
		{
			name: "description",
			content: "Pour participer à la tirelire de Victor, retrouvez ici nos coordonnées bancaires."
		},
		{
			property: "og:title",
			content: "Un cadeau pour Victor"
		},
		{
			property: "og:description",
			content: "Coordonnées bancaires pour la tirelire de Victor."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./album-DlaWbEWu.mjs");
var Route$1 = createFileRoute("/album")({
	head: () => ({ meta: [
		{ title: "Album photo — Baptême de Victor" },
		{
			name: "description",
			content: "Découvrez les photos du baptême de Victor et partagez les vôtres."
		},
		{
			property: "og:title",
			content: "Album photo — Baptême de Victor"
		},
		{
			property: "og:description",
			content: "Photos officielles et photos des invités."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-YpQTNmMw.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Baptême de Victor — 6 Juin 2026" },
		{
			name: "description",
			content: "Bienvenue sur le site souvenir du baptême de Victor. Laissez un mot, partagez vos photos."
		},
		{
			property: "og:title",
			content: "Baptême de Victor — 6 Juin 2026"
		},
		{
			property: "og:description",
			content: "Livre d'or, album photo et souvenirs du baptême de Victor."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var LivreDOrRoute = Route$3.update({
	id: "/livre-d-or",
	path: "/livre-d-or",
	getParentRoute: () => Route$4
});
var CadeauRoute = Route$2.update({
	id: "/cadeau",
	path: "/cadeau",
	getParentRoute: () => Route$4
});
var AlbumRoute = Route$1.update({
	id: "/album",
	path: "/album",
	getParentRoute: () => Route$4
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	AlbumRoute,
	CadeauRoute,
	LivreDOrRoute
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
