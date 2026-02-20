import ScheduleDay from "./ScheduleDay";
import "./ScheduleList.css";

const activitiesFriday = [
  {
    activityTitle: "Check-in Begins ✅",
    activityDescription: "1:00 PM – Hunter West Lobby",
  },
  {
    activityTitle: "Opening Ceremony 🎙️",
    activityDescription: "2:00 PM – Hunter West Lobby",
  },
  {
    activityTitle: "MLT Presentation 📎",
    activityDescription: "3:00 PM – Hunter West Lobby",
  },
  {
    activityTitle: "HACKING STARTS 😈 + Product Thinking Workshop",
    activityDescription: "3:30 PM - Hunter West Lobby",
  },
  {
    activityTitle: "Check-in Ends, Team Registration + Mentor Matching 🙋‍♀️",
    activityDescription: "5:00PM – Hunter West Lobby",
  },
  {
    activityTitle: "DINNER 🍕",
    activityDescription: "6:00 PM - Hunter West Lobby",
  },
  {
    activityTitle: "Hackathon Best Practices for Beginners Workshop",
    activityDescription: "6:30 PM - Hunter West Lobby",
  },
  {
    activityTitle: "AI/LLM Workshop 💻",
    activityDescription: "7:00 PM - VIRTUAL",
  },
  {
    activityTitle: "In-Person Hacking Ends 📌",
    activityDescription: "9:00 PM – Hunter West Lobby",
  },
];
const activitiesSaturday = [
  {
    activityTitle: "IN-PERSON BEGINS 😳",
    activityDescription: "10:00 AM",
  },
  {
    activityTitle: "Breakfast 🍳",
    activityDescription: "10:00 AM – Hunter West Cafeteria",
  },
  //{
  //  activityTitle: "In-Person Hacking Begins ✅",
  //  activityDescription: "11AM – Hunter East Library",
  //},
  {
    activityTitle: "Codepath Workshop 💻, Professional Development",
    activityDescription: "12:00PM - HE 706 (Hemmerdinger room)",
  },
  {
    activityTitle: "LUNCH",
    activityDescription: "1:00 PM - Hunter West Cafeteria",
  },
  {
    activityTitle: "How to Build and Deploy a Next.js Website ✅",
    activityDescription: "1:30 PM - HE 706 (Hemmerdinger room)",
  },
  {
    activityTitle: "Cup Stacking 🥤",
    activityDescription: "3:00 PM - Hunter West Cafeteria",
  },
  {
    activityTitle: "Simplify Workshop",
    activityDescription: "3:30 PM - HE 706 (Hemmerdinger room)",
  },
  {
    activityTitle: "LinkedIn Workshop 🤝",
    activityDescription: "4:00 PM – VIRTUAL",
  },
  {
    activityTitle: "Cloud Services/Hosting ☁️ Workshop",
    activityDescription: "4:30 PM - HE 706 (Hemmerdinger room)",
  },
  {
    activityTitle: "In-Person Hacking Ends 📌",
    activityDescription: "9:00 PM – Hunter West Lobby",
  },
];
const activitiesSunday = [
  {
    activityTitle: "Breakfast 🍳",
    activityDescription: "10:00 AM – Hunter West Cafeteria",
  },
  {
    activityTitle: "Hacking Ends + Lunch 🥪",
    activityDescription: "12:00 PM – Hunter West Cafeteria",
  },
  {
    activityTitle: "Judging Begins 🏆",
    activityDescription: "1:00 PM – Hunter West Cafeteria",
  },
  {
    activityTitle: "Judging Ends 🛑",
    activityDescription: "3:00 PM – Hunter West Cafeteria",
  },
  {
    activityTitle: "Closing Ceremony 🎊",
    activityDescription: "4:00 PM - Hunter West 714",
  },
];

function ScheduleList() {
  return (
    <div className="schedule-list">
      <ScheduleDay activityArray={activitiesFriday} day="Friday"></ScheduleDay>
      <ScheduleDay
        activityArray={activitiesSaturday}
        day="Saturday"
      ></ScheduleDay>
      <ScheduleDay activityArray={activitiesSunday} day="Sunday"></ScheduleDay>
    </div>
  );
}
export default ScheduleList;
