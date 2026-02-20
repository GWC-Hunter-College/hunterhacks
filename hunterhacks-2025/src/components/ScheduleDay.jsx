import "./ScheduleDay.css";
import HunterH from "../assets/HunterH.svg";

// activity array docs:
// activityTitle -> Name
// activityDescription -> Time and Location
function ScheduleDay({ activityArray, day }) {
  return (
    <div className="day">
      <div className="service-div">
        <p className="base-text">Planned Service Changes</p>
      </div>
      <div className="date-div">
        <h3 className="base-text">{day}</h3>
      </div>

      <div className="activities-div">
        {!activityArray || activityArray.length <= 0 ? (
          <img src={HunterH} style={{ height: "120px" }}></img>
        ) : (
          activityArray.map((activity, index) => (
            <div
              key={index}
              style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}
            >
              {index === 0 && (
                <img src={HunterH} alt="H" style={{ height: "120px" }}></img>
              )}

              <Activity
                activityTitle={activity.activityTitle}
                activityDescription={activity.activityDescription}
              ></Activity>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function Activity({ activityTitle, activityDescription }) {
  return (
    <div className="activity">
      <p className="activity-title">{activityTitle}</p>
      <p className="activity-description">{activityDescription}</p>
    </div>
  );
}
export default ScheduleDay;
