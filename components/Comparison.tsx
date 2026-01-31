
import React from 'react';

interface ComparisonProps {
  content: {
    title: string;
    headers: [string, string, string];
    rows: {
      cost: [string, string, string];
      time: [string, string, string];
      versatility: [string, string, string];
    };
  };
}

const Comparison: React.FC<ComparisonProps> = ({ content }) => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-serif text-center mb-12 gold-text">{content.title}</h2>
      <div className="overflow-x-auto rounded-xl border border-neutral-800 shadow-2xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-neutral-800/50">
              <th className="p-5 text-neutral-300 font-bold uppercase text-xs tracking-widest">{content.headers[0]}</th>
              <th className="p-5 text-yellow-500 font-bold uppercase text-xs tracking-widest">{content.headers[1]}</th>
              <th className="p-5 text-neutral-400 font-bold uppercase text-xs tracking-widest">{content.headers[2]}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800">
            <tr>
              <td className="p-5 font-bold text-neutral-200">{content.rows.cost[0]}</td>
              <td className="p-5 text-yellow-500 font-semibold">{content.rows.cost[1]}</td>
              <td className="p-5 text-neutral-500">{content.rows.cost[2]}</td>
            </tr>
            <tr>
              <td className="p-5 font-bold text-neutral-200">{content.rows.time[0]}</td>
              <td className="p-5 text-yellow-500 font-semibold">{content.rows.time[1]}</td>
              <td className="p-5 text-neutral-500">{content.rows.time[2]}</td>
            </tr>
            <tr>
              <td className="p-5 font-bold text-neutral-200">{content.rows.versatility[0]}</td>
              <td className="p-5 text-yellow-500 font-semibold">{content.rows.versatility[1]}</td>
              <td className="p-5 text-neutral-500">{content.rows.versatility[2]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comparison;
