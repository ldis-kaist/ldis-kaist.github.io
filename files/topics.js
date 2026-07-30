/* ==========================================================
   TOPIC → LENS MAPPING
   ----------------------------------------------------------
   Single source of truth for which of the four Research "lenses"
   (Domain, System layer, Methodology, Heterogeneity) each topic
   name belongs to. Included by every page via:
     <script src="files/topics.js"></script>
   placed in <head>, before that page's own scripts run.

   Used by:
   - index.html: the full TOPICS object (with descriptions and
     examples for the Research detail panel) builds its `group`
     field from this map, instead of repeating the string.
   - index.html + publications.html: pubHTML() groups each paper's
     tags by lens (Domain / System layer / Methodology /
     Heterogeneity) when rendering its tag pills, so it's visible
     at a glance how a paper is classified across the four views —
     instead of one flat, unlabeled list of tags.

   A paper's files/publications.csv `tags` column can list any mix
   of topic names from below; tags that don't match any key here
   (typos, or a topic name that no longer exists) are shown under
   an "Other" group so nothing silently disappears.
   ========================================================== */
const TOPIC_GROUPS = {
  "Pure DB": "Domain",
  "AI4DB": "Domain",
  "DB4AI": "Domain",
  "Query Interface": "System layer",
  "Query Optimization": "System layer",
  "Query Processing": "System layer",
  "Data Maintenance": "System layer",
  "System": "Methodology",
  "Algorithm": "Methodology",
  "Theory": "Methodology",
  "AI": "Methodology",
  "Heterogeneous Data": "Heterogeneity",
  "Heterogeneous Workload": "Heterogeneity",
  "Heterogeneous Hardware": "Heterogeneity",
};

const TOPIC_GROUP_ORDER = ["Domain", "System layer", "Methodology", "Heterogeneity"];

/* ==========================================================
   HETEROGENEITY SUBTYPES
   ----------------------------------------------------------
   The homepage's Heterogeneity view has 3 axes — "Heterogeneous
   Data", "Heterogeneous Workload", "Heterogeneous Hardware" — and
   each axis has a handful of concrete subtypes plotted as clickable
   points along it (these used to just be a static "examples" list
   in TOPICS below; now they're the real, clickable unit).

   A paper's files/publications.csv `tags` column should normally use
   a SPECIFIC subtype (e.g. "Relation", "GPU", "Full Query") rather
   than the generic axis name — that's what shows up as the paper's
   tag pill (publications.html, the topic-detail panel), and it's
   what a click on that point in the homepage diagram matches against
   exactly. The 3 axis names still exist as their own clickable lines
   in the diagram, but clicking one only shows the axis-level
   description, not a paper list — the paper list only appears once
   you click a specific point.

   To add a new subtype, add one line here — `axis` decides which of
   the 3 lines it's plotted on, `desc` is the sentence shown when it's
   clicked. Order within an axis is display order along that line
   (near origin → near arrow tip). No other file needs to change.
   ========================================================== */
const HETEROGENEITY_AXES = ["Heterogeneous Data", "Heterogeneous Workload", "Heterogeneous Hardware"];

const HETEROGENEITY_SUBTYPES = {
  "Relation":       { axis: "Heterogeneous Data", desc: "Structured, schema-fixed tables — the classic relational model." },
  "Graph":          { axis: "Heterogeneous Data", desc: "Entities and relationships modeled as nodes and edges." },
  "Vector":         { axis: "Heterogeneous Data", desc: "High-dimensional embeddings used for similarity search." },
  "Model":          { axis: "Heterogeneous Data", desc: "Model weights, activations, and other artifacts of a trained model (LLM)." },

  "Single Operator":  { axis: "Heterogeneous Workload", desc: "A single operator such as a filter or join, run in isolation." },
  "Full Query":       { axis: "Heterogeneous Workload", desc: "A complete analytical query workload, e.g. TPC-H-style queries." },
  "Approximate Query":{ axis: "Heterogeneous Workload", desc: "Queries that trade exactness for speed, returning an approximate answer." },
  "Recursive Query":  { axis: "Heterogeneous Workload", desc: "Queries evaluated step by step, e.g. LLM token-by-token generation." },
  "Incremental View": { axis: "Heterogeneous Workload", desc: "Maintaining a materialized view incrementally as base data changes." },

  "CPU":         { axis: "Heterogeneous Hardware", desc: "General-purpose processing — the default execution target." },
  "DRAM":        { axis: "Heterogeneous Hardware", desc: "Main memory, including disaggregated / tiered memory architectures." },
  "GPU":         { axis: "Heterogeneous Hardware", desc: "Massively parallel hardware, increasingly used for query execution." },
  "Distributed": { axis: "Heterogeneous Hardware", desc: "Data and computation spread across multiple machines." },
};
// Every subtype above is itself tagged with the "Heterogeneity" lens,
// same as the 3 axis names, so pubTagsHTML() groups/labels it correctly.
Object.keys(HETEROGENEITY_SUBTYPES).forEach(t => { TOPIC_GROUPS[t] = "Heterogeneity"; });

/* Resolves a tag to the homepage axis it should count under for
   "which papers show under this axis card" matching: itself if the
   tag already IS one of the 3 axis names, its parent axis if it's a
   subtype above, or null if it's not a heterogeneity tag at all
   (domain / system layer / methodology tags aren't part of this axis
   system, so they simply won't match). */
function heterogeneityAxis(tag) {
  if (HETEROGENEITY_AXES.includes(tag)) return tag;
  const s = HETEROGENEITY_SUBTYPES[tag];
  return s ? s.axis : null;
}

/* All subtypes belonging to one axis, in the display order they're
   defined above — used to plot the clickable points along that
   axis's line in the homepage diagram. */
function subtypesForAxis(axis) {
  return Object.keys(HETEROGENEITY_SUBTYPES).filter(t => HETEROGENEITY_SUBTYPES[t].axis === axis);
}

/* Groups a paper's flat tags array into { group, tags[] } buckets,
   in TOPIC_GROUP_ORDER, so pubHTML() can render them labeled by lens
   instead of as one undifferentiated list. */
function groupTagsByLens(tags) {
  const buckets = {};
  (tags || []).forEach(t => {
    const g = TOPIC_GROUPS[t] || "Other";
    (buckets[g] = buckets[g] || []).push(t);
  });
  const ordered = TOPIC_GROUP_ORDER.filter(g => buckets[g]).map(g => ({ group: g, tags: buckets[g] }));
  if (buckets["Other"]) ordered.push({ group: "Other", tags: buckets["Other"] });
  return ordered;
}

/* Renders a paper's tags grouped by lens with a small label per group
   (e.g. "Domain · AI4DB   System layer · Query Processing ..."),
   instead of one flat, unlabeled list — so it's visible at a glance
   how a paper is classified across the four Research views. Used by
   pubHTML() in both index.html and publications.html. */
function pubTagsHTML(tags) {
  return groupTagsByLens(tags).map(b =>
    `<span class="tag-group"><span class="tag-group-label">${b.group}</span>${
      b.tags.map(t => `<span class="ptag">${t}</span>`).join("")}</span>`
  ).join("");
}
