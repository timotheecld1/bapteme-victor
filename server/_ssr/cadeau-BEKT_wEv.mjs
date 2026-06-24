import { n as __toESM } from "../_runtime.mjs";
import { a as require_react, o as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Toaster$1 } from "./sonner-DoFKumIW.mjs";
import { n as Check, t as Copy } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cadeau-BEKT_wEv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DETAILS = {
	beneficiaire: "Victor Lecarpentier Leon-Dufour",
	banque: "—  à compléter  —",
	iban: "FR76 0000 0000 0000 0000 0000 000",
	bic: "XXXXXXXX",
	reference: "Cadeau Victor"
};
function Cadeau() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-6 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-center" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "smallcaps text-xs text-foreground/60",
						children: "Avec votre cœur"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "script mt-3 text-6xl text-primary",
						children: "Un cadeau"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-lg text-foreground/80 leading-relaxed",
						children: "Votre présence et vos mots sont déjà le plus beau des cadeaux. Si vous souhaitez participer à la tirelire de Victor pour ses premiers projets, voici nos coordonnées. Merci du fond du cœur."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12 rounded-2xl border border-border/60 bg-card/70 p-8 backdrop-blur-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Bénéficiaire",
						value: DETAILS.beneficiaire
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Banque",
						value: DETAILS.banque
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "IBAN",
						value: DETAILS.iban,
						copy: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "BIC / SWIFT",
						value: DETAILS.bic,
						copy: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Référence",
						value: DETAILS.reference
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-center text-sm italic text-muted-foreground",
				children: "« Indiquez « Cadeau Victor » en référence pour qu'on sache d'où vient ce joli geste. »"
			})
		]
	});
}
function Row({ label, value, copy }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-4 border-b border-border/40 py-4 last:border-b-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "smallcaps text-xs text-foreground/60",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 break-all font-medium text-foreground",
				children: value
			})]
		}), copy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: async () => {
				await navigator.clipboard.writeText(value.replace(/\s/g, ""));
				setCopied(true);
				toast.success(`${label} copié`);
				setTimeout(() => setCopied(false), 1800);
			},
			className: "flex-shrink-0 rounded-md border border-input bg-background p-2 text-foreground/70 transition hover:bg-accent hover:text-foreground",
			"aria-label": `Copier ${label}`,
			children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-4 w-4" })
		})]
	});
}
//#endregion
export { Cadeau as component };
