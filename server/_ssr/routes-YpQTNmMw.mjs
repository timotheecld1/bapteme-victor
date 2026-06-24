import { o as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-YpQTNmMw.js
var import_jsx_runtime = require_jsx_runtime();
var balloon_hero_default = "/assets/balloon-hero-BFij8QUy.png";
var cloud_default = "/assets/cloud-BhDsRo6R.png";
function Accueil() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative grid grid-cols-1 items-center gap-8 pb-20 pt-12 md:grid-cols-2 md:gap-12 md:pt-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-2 text-center md:order-1 md:text-left",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "smallcaps text-sm font-semibold text-foreground/80 animate-fade-up",
						children: "Bienvenue au baptême de"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "script mt-3 text-8xl text-primary md:text-9xl animate-fade-up drop-shadow-sm",
						style: { animationDelay: "0.1s" },
						children: "Victor"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 smallcaps text-sm font-semibold text-foreground animate-fade-up",
						style: { animationDelay: "0.2s" },
						children: "6 Juin 2026"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-8 max-w-md text-base leading-relaxed text-foreground/90 animate-fade-up md:mx-0",
						style: { animationDelay: "0.3s" },
						children: "Merci d'avoir partagé ce jour si précieux avec nous — ou de nous accompagner de loin. Ce petit nid en ligne rassemble vos mots, vos photos et tous les souvenirs que nous garderons pour Victor."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-1 relative flex justify-center md:order-2 min-h-[360px] md:min-h-[480px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: cloud_default,
						alt: "",
						"aria-hidden": "true",
						className: "pointer-events-none absolute top-4 left-0 w-40 md:w-56 opacity-70 animate-drift-slow"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: cloud_default,
						alt: "",
						"aria-hidden": "true",
						className: "pointer-events-none absolute bottom-8 right-0 w-48 md:w-64 opacity-60 animate-drift-fast"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: cloud_default,
						alt: "",
						"aria-hidden": "true",
						className: "pointer-events-none absolute top-1/2 -left-6 w-32 md:w-40 opacity-50 animate-bob"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: balloon_hero_default,
						alt: "Montgolfière aquarelle avec Victor",
						width: 1024,
						height: 1280,
						className: "relative z-10 w-72 md:w-96 animate-float"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid grid-cols-1 gap-6 pb-24 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					to: "/livre-d-or",
					label: "Livre d'or",
					description: "Laissez un mot doux que Victor pourra lire en grandissant.",
					icon: "✒︎",
					delay: "0s"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					to: "/album",
					label: "Album photo",
					description: "Découvrez les photos du jour et partagez les vôtres.",
					icon: "✦",
					delay: "0.1s"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					to: "/cadeau",
					label: "Un cadeau",
					description: "Faites un petit geste pour démarrer la tirelire de Victor.",
					icon: "❀",
					delay: "0.2s"
				})
			]
		})]
	});
}
function Card({ to, label, description, icon, delay }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		className: "group relative block rounded-2xl border border-border/60 bg-card/70 p-8 text-center shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md animate-fade-up",
		style: { animationDelay: delay },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-3xl text-primary/70 transition-transform group-hover:scale-110",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-2xl",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-6 inline-block smallcaps text-xs text-primary",
				children: "Découvrir →"
			})
		]
	});
}
//#endregion
export { Accueil as component };
