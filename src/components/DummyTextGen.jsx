import React, { useState } from "react";
import { dummyTextGen } from "./generatedummytext";

const DummyTextGen = () => {
  const [dummyText, setDummyText] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const rawData = Object.fromEntries(formData.entries());

    const words = parseInt(rawData.words);
    const paragraph = parseInt(rawData.paragraph);

    // 🔴 Validation
    if (words <= 0 || paragraph <= 0 || isNaN(words) || isNaN(paragraph)) {
      setIsInvalid(true);
      setDummyText("");
      return;
    }

    // ✅ Reset error
    setIsInvalid(false);

    // ✅ Generate
    setDummyText(dummyTextGen(words, paragraph));

    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 to-slate-800 px-4">
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Dummy Text Generator
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-200 mb-1">
              Number of Paragraphs
            </label>
            <input
              type="number"
              name="paragraph"
              placeholder="e.g. 2"
              className={`w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-cyan-400 ${
                isInvalid ? "border border-red-500" : ""
              }`}
            />
          </div>

          <div>
            <label className="block text-sm text-gray-200 mb-1">
              Words per Sentence
            </label>
            <input
              type="number"
              name="words"
              placeholder="e.g. 5"
              className={`w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-cyan-400 ${
                isInvalid ? "border border-red-500" : ""
              }`}
            />
          </div>

          {/* 🔴 Error message */}
          {isInvalid && (
            <p className="text-red-400 text-sm">
              Values must be greater than 0
            </p>
          )}

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition duration-200"
          >
            Generate Text
          </button>
        </form>

        {dummyText && (
          <div className="mt-6 bg-white/10 p-4 rounded-xl border border-white/20 max-h-64 overflow-y-auto">
            <h2 className="text-lg font-semibold text-white mb-3">
              Generated Text
            </h2>

            <div className="space-y-3 text-gray-200 text-sm leading-relaxed">
              {dummyText.map((par, i) => (
                <p key={i}>{par}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DummyTextGen;
