import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const assets = [
  {
    url: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/avatar.webp",
    dest: "public/images/avatar.png",
  },
  {
    url: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/screen-1.webp",
    dest: "public/images/screen-1.webp",
  },
  {
    url: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/screen-2.webp",
    dest: "public/images/screen-2.webp",
  },
  {
    url: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/screen-3.webp",
    dest: "public/images/screen-3.webp",
  },
  {
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=900&q=80",
    dest: "public/images/app-development.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=900&q=80",
    dest: "public/images/ai-automation.jpg",
  },
  {
    url: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/website.webp",
    dest: "public/images/website.webp",
  },
  {
    url: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&h=900&q=80",
    dest: "public/images/videos-service.jpg",
  },
  {
    url: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/contact.webp",
    dest: "public/images/contact.webp",
  },
  {
    url: "https://randomuser.me/api/portraits/men/75.jpg",
    dest: "public/images/testimonial-avatar.jpg",
  },
  {
    url: "https://3000-iaw0r2feqvqigc6si5id6.sandbox.webild.io/favicon.svg",
    dest: "public/seo/favicon.svg",
  },
];

async function downloadOne({ url, dest }) {
  const filePath = path.resolve(dest);
  await mkdir(path.dirname(filePath), { recursive: true });
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(filePath, buf);
  console.log(`✓ ${dest}`);
}

async function runBatch(items, size = 4) {
  for (let i = 0; i < items.length; i += size) {
    await Promise.all(items.slice(i, i + size).map(downloadOne));
  }
}

await runBatch(assets);
console.log(`Downloaded ${assets.length} assets.`);