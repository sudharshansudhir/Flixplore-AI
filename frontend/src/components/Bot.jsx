// src/components/Bot.jsx
import React, { useState, useRef, useEffect, useContext } from "react";
import axios from "axios";
import { IoSend } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context"; // adjust path if needed

const Bot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]); // { from: "user"|"bot"|"movie", text?, movie? }
  const [loading, setLoading] = useState(false);
  const msgEndRef = useRef(null);
  const navigate = useNavigate();
  const { setcurrfilm } = useContext(AppContext);

  // auto-scroll when messages change
  useEffect(() => {
    msgEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  // push a message into messages state
  const pushMessage = (m) => setMessages((prev) => [...prev, m]);

  // send the user's input to backend smartbot endpoint
  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    // Add user bubble
    pushMessage({ from: "user", text: trimmed });
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3000/api/smartbot", { message: trimmed });

      // text reply from backend
      const botText = res.data?.reply ?? "I couldn't find anything — try different keywords.";
      pushMessage({ from: "bot", text: botText });

      // if movies array present, convert to movie cards
      const movies = res.data?.movies;
      if (Array.isArray(movies) && movies.length > 0) {
        // normalize each movie (just wrap it)
        const movieCards = movies.map((movie) => ({ from: "movie", movie }));
        setMessages((prev) => [...prev, ...movieCards]);
      }
    } catch (err) {
      console.error("Bot error:", err);
      pushMessage({ from: "bot", text: "Error contacting bot. Try again later." });
    } finally {
      setLoading(false);
    }
  };

  // Handle clicking a movie card: set context and navigate to watch route
  const onMovieClick = (movie) => {
    if (!movie) return;
    const name = movie.name || movie.title || movie._id || "";
    try {
      if (typeof setcurrfilm === "function") setcurrfilm(name);
    } catch (e) {
      // ignore if context not available
    }
    setOpen(false);
    navigate(`/watch/${encodeURIComponent(name)}`);
  };

  // Render single bubble or movie card
  const renderMessageBubble = (m, i) => {
    if (m.from === "bot") {
      return (
        <div key={i} className="p-2 rounded-lg max-w-[85%] bg-red-600 text-white self-start">
          {m.text}
        </div>
      );
    }
    if (m.from === "user") {
      return (
        <div key={i} className="p-2 rounded-lg max-w-[85%] bg-gray-800 text-white self-end ml-auto">
          {m.text}
        </div>
      );
    }
    if (m.from === "movie") {
      const movie = m.movie || {};
      const name = movie.name || movie.title || "Untitled";
      // support various thumbnail field names and fallback to placeholder
      const thumb = movie.thumbnail || movie.poster || movie.image || movie.poster_path || "";
      // genre can be array or string
      const genreArr = Array.isArray(movie.genre) ? movie.genre : (movie.genre ? [movie.genre] : []);
      const genres = genreArr.join(", ");
      const summary = movie.story_line || movie.overview || movie.description || movie.summary || "";
      const rating = movie.ratings ?? movie.rating ?? movie.vote_average ?? null;
      const isSeries = Boolean(movie.episodes_count || movie.seasons_count);

      return (
        <div
          key={i}
          onClick={() => onMovieClick(movie)}
          className="cursor-pointer flex gap-3 bg-[#141414] p-2 rounded-lg border border-red-700 hover:bg-[#1b1b1b] transition"
        >
          <img
            src={thumb || "https://via.placeholder.com/120x160?text=No+Image"}
            alt={name}
            className="w-16 h-20 object-cover rounded"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-red-300">{name}</p>
              <span className="text-xs text-gray-300">{rating ?? "-"}</span>
            </div>

            <p className="text-xs text-gray-300 mt-1">{genres}</p>

            <p className="text-xs text-gray-400 mt-1 line-clamp-3">
              {summary ? summary : <span className="italic text-gray-500">No summary available</span>}
            </p>

            <div className="mt-2 flex gap-2">
              <button
                onClick={(e) => { e.stopPropagation(); onMovieClick(movie); }}
                className="bg-red-600 text-white px-3 py-1 rounded text-sm"
              >
                Watch
              </button>
              {isSeries ? (
                <span className="text-xs text-gray-400 px-2 py-1 border border-gray-700 rounded">Series</span>
              ) : null}
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Window */}
      {open && (
        <div className="mb-4 w-[92vw] max-w-[380px] h-[520px] bg-[#0f0f10] text-white shadow-2xl rounded-2xl border border-red-600 flex flex-col overflow-hidden">
          <div className="bg-red-600 text-white p-3 text-center text-lg font-bold">
            Flixplore-Bot
          </div>

          <div className="flex-1 p-3 overflow-y-auto text-sm space-y-3 flex flex-col">
            {/* messages area */}
            <div className="flex flex-col gap-3">
              {messages.length === 0 && (
                <div className="text-gray-400 text-sm">
                  Try queries: "top 5 action films", "vijay movies", "list lokesh films", "all tamil series"
                </div>
              )}

              {messages.map((m, i) => renderMessageBubble(m, i))}
            </div>

            <div ref={msgEndRef} />
          </div>

          <div className="p-2 border-t border-red-700 bg-[#0f0f10] flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") sendMessage(); }}
              className="flex-1 border border-red-700 bg-black text-white p-2 rounded outline-none"
              placeholder="Try: 'top 5 action films', 'vijay movies', 'list lokesh films'..."
            />
            <button
              onClick={sendMessage}
              className={`bg-red-600 p-3 rounded hover:bg-red-700 transition ${loading ? "opacity-60 pointer-events-none" : ""}`}
              aria-label="Send"
              disabled={loading}
            >
              <IoSend size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex text-2xl items-center justify-center border-2 border-red-600 rounded-full p-4 bg-black w-[100px] h-[100px] text-red-500 font-bold shadow-xl"
        aria-label="Open Flixplore AI"
      >
        ASK DUDE
      </button>
    </div>
  );
};

export default Bot;
