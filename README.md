# Portfolio

Personal portfolio website — plain HTML/CSS/JS, no build step. Works on desktop and mobile, with an EN / 한국어 / 中文 language switcher (English by default).

## View it

Open `index.html` in a browser, or serve the folder (e.g. `python3 -m http.server`) / publish it with GitHub Pages.
You can force a language with `?lang=en`, `?lang=ko` or `?lang=zh`.

## Fill in your details

Everything personal lives in **`js/content.js`**:

| Key | What it is |
| --- | --- |
| `profile` | Name, role, email, photo, initials, year (the purple "About Me" card) |
| `hero` | Featured image tile, the two stat tiles, the yellow highlight tile |
| `about` | Intro paragraphs, detail rows (location, education…), skills |
| `projects` | Project cards — add or remove entries freely |
| `works` | Portfolio gallery — add or remove entries freely |
| `links` | Social / contact links |

Text can be written per language as `{ en: "...", ko: "...", zh: "..." }` (missing languages fall back to English) or as a plain string.

Put images in `assets/images/` and reference them like `image: "assets/images/work-1.jpg"`. Empty `image: ""` shows a colored placeholder.

Menu labels and section titles are in **`js/i18n.js`**; colors and layout are in **`css/style.css`** (tokens at the top).

## 정보 입력 방법 (한국어)

`js/content.js` 파일만 수정하면 됩니다. 이름·소개글·프로젝트·포트폴리오 작업을 `{ en, ko, zh }` 형식으로 언어별로 적고, 이미지는 `assets/images/` 폴더에 넣은 뒤 경로를 적어 주세요.
