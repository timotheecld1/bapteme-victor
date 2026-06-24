import { n as __toESM } from "../_runtime.mjs";
import { a as require_react, i as useQueryClient, n as useQuery, o as require_jsx_runtime, t as useMutation } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Toaster$1 } from "./sonner-DoFKumIW.mjs";
import { i as ZodError, n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/livre-d-or-BClP9KD2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var API = "https://bapteme-victor-api.tleondufour.workers.dev".replace(/\/$/, "");
var entrySchema = objectType({
	name: stringType().trim().min(1, "Votre prénom est requis").max(80),
	relation: stringType().trim().max(80).optional().or(literalType("")),
	message: stringType().trim().min(1, "Écrivez un petit mot").max(1e3)
});
async function fetchEntries() {
	if (!API) return [];
	const res = await fetch(`${API}/notes`);
	if (!res.ok) throw new Error("Impossible de charger les messages");
	return res.json();
}
function LivreDOr() {
	const qc = useQueryClient();
	const { data: entries, isLoading } = useQuery({
		queryKey: ["guestbook"],
		queryFn: fetchEntries,
		enabled: Boolean(API)
	});
	const [name, setName] = (0, import_react.useState)("");
	const [relation, setRelation] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const mutation = useMutation({
		mutationFn: async (input) => {
			if (!API) throw new Error("Le livre d'or n'est pas encore configuré (VITE_UPLOADS_API).");
			const parsed = entrySchema.parse(input);
			const res = await fetch(`${API}/notes`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: parsed.name,
					relation: parsed.relation || void 0,
					message: parsed.message
				})
			});
			if (!res.ok) {
				const msg = await res.text().catch(() => "");
				throw new Error(msg || `Envoi échoué (${res.status})`);
			}
		},
		onSuccess: () => {
			toast.success("Merci pour ce joli message !");
			setName("");
			setRelation("");
			setMessage("");
			qc.invalidateQueries({ queryKey: ["guestbook"] });
		},
		onError: (err) => {
			const msg = err instanceof ZodError ? err.issues[0]?.message : err instanceof Error ? err.message : "Un problème est survenu.";
			toast.error(msg ?? "Un problème est survenu.");
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-6 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-center" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "smallcaps text-xs text-foreground/60",
						children: "Pour Victor"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "script mt-3 text-6xl text-primary",
						children: "Livre d'or"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-lg text-foreground/80",
						children: "Laissez un mot, un souvenir, une bénédiction. Victor les lira un jour, quand il sera grand."
					})
				]
			}),
			!API && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 rounded-md border border-amber-400/40 bg-amber-50/60 p-4 text-center text-sm text-amber-900",
				children: [
					"Le livre d'or n'est pas encore branché. Définissez ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "VITE_UPLOADS_API" }),
					" avec l'URL de votre Worker Cloudflare puis redéployez le site."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-12 space-y-4 rounded-2xl border border-border/60 bg-card/70 p-6 backdrop-blur-sm",
				onSubmit: (e) => {
					e.preventDefault();
					mutation.mutate({
						name,
						relation,
						message
					});
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "smallcaps text-xs text-foreground/70",
							children: "Votre prénom"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							maxLength: 80,
							value: name,
							onChange: (e) => setName(e.target.value),
							className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "smallcaps text-xs text-foreground/70",
							children: "Lien avec Victor (optionnel)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							maxLength: 80,
							placeholder: "Marraine, oncle, ami…",
							value: relation,
							onChange: (e) => setRelation(e.target.value),
							className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "smallcaps text-xs text-foreground/70",
							children: "Votre message"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							required: true,
							maxLength: 1e3,
							rows: 5,
							value: message,
							onChange: (e) => setMessage(e.target.value),
							className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-right text-xs text-muted-foreground",
							children: [message.length, "/1000"]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: mutation.isPending || !API,
						className: "smallcaps w-full rounded-md bg-primary px-4 py-3 text-sm text-primary-foreground transition hover:bg-primary/90 disabled:opacity-50",
						children: mutation.isPending ? "Envoi…" : "Déposer mon mot"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mt-16 space-y-4",
				children: isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-muted-foreground",
					children: "Chargement…"
				}) : entries && entries.length > 0 ? entries.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntryCard, { entry: e }, e.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-muted-foreground",
					children: "Soyez le premier à laisser un mot…"
				})
			})
		]
	});
}
function EntryCard({ entry }) {
	const date = new Date(entry.created_at).toLocaleDateString("fr-FR", {
		day: "numeric",
		month: "long",
		year: "numeric"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-2xl border border-border/60 bg-card/70 p-6 backdrop-blur-sm animate-fade-up",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "whitespace-pre-line text-foreground/90 leading-relaxed",
			children: entry.message
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
			className: "mt-4 flex items-baseline justify-between gap-2 border-t border-border/40 pt-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "script text-2xl text-primary",
					children: entry.name
				}), entry.relation ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "ml-2 text-xs text-muted-foreground",
					children: ["— ", entry.relation]
				}) : null]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "smallcaps text-[10px] text-muted-foreground",
				children: date
			})]
		})]
	});
}
//#endregion
export { LivreDOr as component };
