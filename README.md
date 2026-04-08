````markdown
# 📝 Dummy Text Generator

## 📌 Overview
A simple JavaScript utility to generate dummy text using the `lorem-ipsum` library.  
It can create random words, sentences, and paragraphs dynamically.

---

## ⚙️ Installation

```bash
npm install lorem-ipsum
````

---

## 📂 Usage

```javascript
import { dummyTextGen } from "./dummyTextGen";

const text = dummyTextGen(10, 2);
console.log(text);
```

---

## 🧠 Function

```javascript
dummyTextGen(words, paragraphs)
```

### Parameters

* `words` → Number of words per sentence (minimum 5)
* `paragraphs` → Number of paragraphs

---

## ⚡ Behavior

* Ensures at least **5 words per sentence**
* Generates **5–15 sentences per paragraph (random)**
* Returns an **array of paragraphs**

---

## 📥 Example

```javascript
dummyTextGen(5, 2);
```

Output:

```javascript
[
  "Lorem ipsum dolor sit amet. Consectetur adipiscing elit...",
  "Sed do eiusmod tempor incididunt ut labore..."
]
```

---

## ⚠️ Notes

* If `words < 5`, it defaults to **5**
* Output is an array, not a single string
* Sentence count per paragraph is randomized

---

## 🚀 Future Improvements

* Option to return a single string
* Custom sentence count control
* UI integration

```
```
