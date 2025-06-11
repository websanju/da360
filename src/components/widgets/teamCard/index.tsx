"use client";
import Image from "next/image";
import styles from "./styles.module.scss";

type MemberType = {
  img: string;
  name: string;
  role: string;
  textColor?: string;
  iconImg?: string;
  iconPosition?: "left" | "right";
};

type TeamCardProps = {
  member: MemberType;
};

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <div
      className={styles.newCard}
      style={{
        backgroundImage: 'url("/images/team/team-bg.svg")',
      }}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={member.img}
          alt={member.name}
          width={300}
          height={300}
          className="img-fluid"
        />

        {member.iconImg && (
          <div
            className={`${styles.icon} ${
              member.iconPosition === "right"
                ? styles.iconRight
                : styles.iconLeft
            }`}
          >
            <Image
              src={member.iconImg}
              alt="Icon"
              width={60}
              height={60}
              className="img-fluid"
            />
          </div>
        )}
      </div>

      <div className={styles.cardContent}>
        <h5 className={styles.newName} style={{ color: member.textColor }}>
          {member.name}
        </h5>
        <p className={styles.newRole}>{member.role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
