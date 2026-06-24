import { n as __toESM } from "../_runtime.mjs";
import { a as require_react, i as useQueryClient, n as useQuery, o as require_jsx_runtime, t as useMutation } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Toaster$1 } from "./sonner-DoFKumIW.mjs";
import { t as imageCompression } from "../_libs/browser-image-compression.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/album-DlaWbEWu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var MAX_FILES = 10;
var MAX_SIZE = 25 * 1024 * 1024;
var API = "https://bapteme-victor-api.tleondufour.workers.dev".replace(/\/$/, "");
function photoSrc(p) {
	return p.url.startsWith("http") ? p.url : `${API}${p.url}`;
}
async function fetchGuestPhotos() {
	if (!API) return [];
	const res = await fetch(`${API}/photos`);
	if (!res.ok) throw new Error("Impossible de charger les photos");
	return res.json();
}
function Album() {
	const qc = useQueryClient();
	const { data: photos, isLoading } = useQuery({
		queryKey: ["guest-photos"],
		queryFn: fetchGuestPhotos,
		enabled: Boolean(API)
	});
	const [uploaderName, setUploaderName] = (0, import_react.useState)("");
	const [caption, setCaption] = (0, import_react.useState)("");
	const [files, setFiles] = (0, import_react.useState)([]);
	const [progress, setProgress] = (0, import_react.useState)({});
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!lightbox) return;
		const onKey = (e) => e.key === "Escape" && setLightbox(null);
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [lightbox]);
	const upload = useMutation({
		mutationFn: async () => {
			if (!API) throw new Error("L'album n'est pas encore configuré (VITE_UPLOADS_API).");
			if (files.length === 0) throw new Error("Choisissez au moins une photo");
			if (files.length > MAX_FILES) throw new Error(`${MAX_FILES} photos maximum`);
			const isHeic = (f) => /heic|heif/i.test(f.type) || /\.(heic|heif)$/i.test(f.name);
			for (const f of files) {
				if (!f.type.startsWith("image/") && !isHeic(f)) throw new Error(`${f.name} n'est pas une image`);
				if (f.size > MAX_SIZE) throw new Error(`${f.name} dépasse 25 Mo`);
			}
			const init = {};
			files.forEach((f, i) => init[`${i}-${f.name}`] = "queued");
			setProgress(init);
			for (let i = 0; i < files.length; i++) {
				const file = files[i];
				const key = `${i}-${file.name}`;
				setProgress((p) => ({
					...p,
					[key]: "compressing"
				}));
				const compressed = await imageCompression(file, {
					maxSizeMB: 1,
					maxWidthOrHeight: 2e3,
					fileType: "image/webp",
					useWebWorker: true,
					preserveExif: false,
					initialQuality: .82
				});
				setProgress((p) => ({
					...p,
					[key]: "uploading"
				}));
				const form = new FormData();
				form.append("file", new File([compressed], `${crypto.randomUUID()}.webp`, { type: "image/webp" }));
				if (uploaderName.trim()) form.append("uploader_name", uploaderName.trim());
				if (caption.trim()) form.append("caption", caption.trim());
				const res = await fetch(`${API}/photos`, {
					method: "POST",
					body: form
				});
				if (!res.ok) {
					const msg = await res.text().catch(() => "");
					throw new Error(`Envoi de ${file.name} échoué (${res.status}). ${msg}`);
				}
				setProgress((p) => ({
					...p,
					[key]: "done"
				}));
			}
		},
		onSuccess: () => {
			toast.success("Merci pour vos photos !");
			setFiles([]);
			setCaption("");
			setProgress({});
			qc.invalidateQueries({ queryKey: ["guest-photos"] });
		},
		onError: (e) => toast.error(e.message)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-6 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-center" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "smallcaps text-xs text-foreground/60",
						children: "Souvenirs du jour"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "script mt-3 text-6xl text-primary",
						children: "Album photo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-xl text-foreground/80",
						children: "Les photos officielles arriveront ici dès que nous les recevons. En attendant, partagez vos clichés du jour — ils rejoindront ceux des autres invités."
					})
				]
			}),
			!API && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mx-auto mt-8 max-w-2xl rounded-md border border-amber-400/40 bg-amber-50/60 p-4 text-center text-sm text-amber-900",
				children: [
					"L'album n'est pas encore branché. Définissez ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "VITE_UPLOADS_API" }),
					" avec l'URL de votre Worker Cloudflare puis redéployez le site."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mx-auto mt-12 max-w-2xl space-y-4 rounded-2xl border border-border/60 bg-card/70 p-6 backdrop-blur-sm",
				onSubmit: (e) => {
					e.preventDefault();
					upload.mutate();
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl",
						children: "Partagez vos photos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "smallcaps text-xs text-foreground/70",
							children: "Votre prénom (optionnel)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							maxLength: 80,
							value: uploaderName,
							onChange: (e) => setUploaderName(e.target.value),
							className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "smallcaps text-xs text-foreground/70",
							children: "Légende (optionnel)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							maxLength: 280,
							value: caption,
							onChange: (e) => setCaption(e.target.value),
							className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "smallcaps text-xs text-foreground/70",
							children: "Vos photos (10 maximum). Elles sont automatiquement optimisées pour le web."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							accept: "image/*,.heic,.heif",
							multiple: true,
							onChange: (e) => setFiles(Array.from(e.target.files ?? [])),
							className: "mt-1 block w-full text-sm file:mr-3 file:rounded-md file:border-0 file:bg-secondary file:px-3 file:py-2 file:text-sm file:text-secondary-foreground hover:file:bg-secondary/80"
						}),
						files.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 space-y-1 text-xs text-muted-foreground",
							children: files.map((f, i) => {
								const key = `${i}-${f.name}`;
								const state = progress[key];
								const label = state === "compressing" ? "Compression…" : state === "uploading" ? "Envoi…" : state === "done" ? "✓ Envoyée" : upload.isPending ? "En attente…" : `${(f.size / 1024 / 1024).toFixed(1)} Mo`;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate",
										children: f.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "shrink-0",
										children: label
									})]
								}, key);
							})
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: upload.isPending || files.length === 0 || !API,
						className: "smallcaps w-full rounded-md bg-primary px-4 py-3 text-sm text-primary-foreground transition hover:bg-primary/90 disabled:opacity-50",
						children: upload.isPending ? "Envoi…" : "Envoyer mes photos"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-center text-3xl",
					children: "Photos des invités"
				}), isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-center text-muted-foreground",
					children: "Chargement…"
				}) : photos && photos.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4",
					children: photos.map((p) => {
						const src = photoSrc(p);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setLightbox(src),
							className: "block w-full overflow-hidden rounded-xl border border-border/60 bg-card/60 text-left transition hover:shadow-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src,
								alt: p.caption ?? "Photo d'invité",
								loading: "lazy",
								decoding: "async",
								className: "w-full"
							}), (p.caption || p.uploader_name) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3",
								children: [p.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-foreground/80",
									children: p.caption
								}), p.uploader_name && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 smallcaps text-[10px] text-muted-foreground",
									children: ["— ", p.uploader_name]
								})]
							})]
						}, p.id);
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-center text-muted-foreground",
					children: "Aucune photo pour l'instant. Soyez le premier à partager !"
				})]
			}),
			lightbox && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-6 backdrop-blur-sm animate-fade-up",
				onClick: () => setLightbox(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: lightbox,
					alt: "",
					className: "max-h-full max-w-full rounded-lg shadow-2xl"
				})
			})
		]
	});
}
//#endregion
export { Album as component };
