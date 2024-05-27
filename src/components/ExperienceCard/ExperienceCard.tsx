import { ExperienceCardProps } from "../../types/Index";

function ExperienceCard({
  key,
  websiteName,
  imageUrl,
  websiteLink,
  experienceDuration,
  experienceDescription,
}: ExperienceCardProps) {
  return (
    <div
      key={key}
      style={{
        border: "1px solid red",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <img
        src={imageUrl}
        height={250}
        width={635}
        style={{ borderRadius: 20 }}
      />
      <div>
        <a href={websiteLink} target="_blank">
          {websiteName}
        </a>
        <p>{experienceDuration}</p>
        <p>{experienceDescription}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;
