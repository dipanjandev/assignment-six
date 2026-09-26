import { IworkoutType } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";

interface TodayPlanCardProps {
  workout: IworkoutType;
  activeTab: "today" | "saved";
  onDelete: (id: number) => void;
  onMarkDone: (id: number) => void;
}

const TodayPlanCard = ({
  workout,
  activeTab = "today",
  onDelete,
  onMarkDone,
}: TodayPlanCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-gray-800/80 bg-[#0d111a] p-3.5 sm:p-4 transition-all hover:border-gray-700">
      {/* বাম পাশের অংশ: ছবি ও ইনফো */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* রেসপনসিভ থাম্বনেইল ইমেজ */}
        <div className="relative h-18 w-24 sm:h-20 sm:w-32 shrink-0 overflow-hidden rounded-xl border border-gray-800">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        {/* টেক্সট ও স্ট্যাটস ইনফরমেশন */}
        <div className="space-y-1 min-w-0">
          <h3 className="text-base sm:text-lg font-bold tracking-wide text-white uppercase truncate">
            {workout.name}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-gray-400 truncate">
            {workout.equipment}
          </p>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1 text-[11px] sm:text-xs text-gray-300">
            <span className="flex items-center gap-1 shrink-0">
              <svg
                className="h-3.5 w-3.5 text-[#ccff00]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {workout.duration} min
            </span>

            <span className="flex items-center gap-1 shrink-0">
              <svg
                className="h-3.5 w-3.5 text-[#ccff00]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c1.1 0 2 .9 2 2 0 .74-.4 1.38-1 1.72v1.08c2.8 1.15 4.8 3.88 4.8 7.2 0 4.42-3.58 8-8 8s-8-3.58-8-8c0-3.32 2-6.05 4.8-7.2V5.72C6.4 5.38 6 4.74 6 4c0-1.1.9-2 2-2 1.1 0 2 .9 2 2v.28C10.6 6.1 11.27 6 12 6c.73 0 1.4.1 2 .28V4c0-1.1.9-2 2-2z" />
              </svg>
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1 shrink-0">
              <svg
                className="h-3.5 w-3.5 text-[#ccff00]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              {workout.rating}
            </span>
          </div>
        </div>
      </div>

      {/* ডান পাশের অংশ: বাটনসমূহ (মোবাইলে ফুল-উইডথ ও সুন্দর পার্টিশন) */}
      <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 pt-2.5 sm:pt-0 border-t border-gray-850 sm:border-none w-full sm:w-auto">
        <Link href={`/${workout.id}`} className="flex-1 sm:flex-initial">
          <button className="w-full sm:w-auto rounded-full border border-gray-800 bg-[#161b26] px-3.5 sm:px-5 py-2 text-xs font-semibold text-gray-200 transition-colors hover:border-gray-600 hover:text-white">
            View Details
          </button>
        </Link>

        {activeTab === "today" && (
          <button
            onClick={() => onMarkDone && onMarkDone(workout.id)}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 rounded-full bg-[#ccff00] px-3 sm:px-4 py-2 text-xs font-bold text-black transition-all hover:bg-[#b8e600] active:scale-95 shadow-[0_0_15px_rgba(204,255,0,0.25)]"
          >
            <svg
              className="h-3.5 w-3.5 stroke-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="hidden md:block">Mark as </span>Done
          </button>
        )}

        <button
          onClick={() => onDelete && onDelete(workout.id)}
          className="p-1.5 text-gray-500 hover:text-red-400 transition-colors rounded-lg hover:bg-gray-800/40 shrink-0"
          aria-label="Delete item"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TodayPlanCard;
