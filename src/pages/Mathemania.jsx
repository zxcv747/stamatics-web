// src/pages/Mathemania.jsx
import { useState } from "react";

function Mathemania() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;

    const form = e.target;

    const payload = {
      teamName: form.teamName.value.trim(),
      institute: form.institute.value.trim(),
      teamLeader: form.teamLeader.value.trim(),
      email: form.leaderEmail.value.trim(),
      contactNumber: form.leaderPhone.value.trim(),
      member2Name: form.member2.value.trim(),
      member2Email: form.member2Email.value.trim(),
      member3Name: form.member3.value.trim(),
      member3Email: form.member3Email.value.trim(),
      member4Name: form.member4.value.trim(),
      member4Email: form.member4Email.value.trim(),
    };

    // Basic team name validation (Roman characters, digits, spaces, underscores)
    const teamNamePattern = /^[A-Za-z0-9_ ]+$/;
    if (!teamNamePattern.test(payload.teamName)) {
      alert(
        "Team name can only contain letters, numbers, spaces, and underscores. No emojis or special symbols."
      );
      return;
    }

    try {
      setSubmitting(true);

      await fetch("YOUR_WEB_APP_URL_HERE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      alert(
        "Registration submitted! A confirmation email has been sent to the team leader."
      );
      form.reset();
    } catch (err) {
      console.error(err);
      alert(
        "An error occurred while submitting your registration. Please try again later."
      );
    }

    setSubmitting(false);
  };

  return (
    <section className="mathemania-page">
      <div className="mathemania-inner">
        {/* HEADER */}
        <header className="mathemania-header">
          <h1 className="mathemania-title">Mathemania</h1>
          <p className="mathemania-subtitle">
            The flagship mathematics contest of Stamatics, IIT Kanpur –
            combining creativity, rigor, and problem-solving under one banner.
          </p>
        </header>

        <div className="mathemania-grid">
          {/* LEFT: EVENT OVERVIEW + KEY INFO + PAST PAPERS LINE */}
          <div className="mathemania-card">
            <h2 className="mathemania-card-title">Event Overview</h2>
            <p className="mathemania-text">
              Mathemania is a multi-round competition that tests conceptual
              understanding, speed, and creativity in mathematics and related
              problem-solving. It is open to students across batches and
              disciplines at IIT Kanpur.
            </p>
            <ul className="mathemania-list">
              <li>Individual and team-based rounds</li>
              <li>Mixture of proof, puzzle, and numerical problems</li>
              <li>Designed and curated by Stamatics members</li>
            </ul>

            <h2 className="mathemania-card-title mathemania-subheading">
              Key Information
            </h2>
            <div className="mathemania-info-list">
              <div className="mathemania-info-item">
                <span className="mathemania-info-label">Format</span>
                <span className="mathemania-info-value">
                  Written + Interactive Rounds
                </span>
              </div>
              <div className="mathemania-info-item">
                <span className="mathemania-info-label">Level</span>
                <span className="mathemania-info-value">
                  Undergraduate &amp; Postgraduate
                </span>
              </div>
              <div className="mathemania-info-item">
                <span className="mathemania-info-label">Category</span>
                <span className="mathemania-info-value">
                  Problem Solving &amp; Math Contest
                </span>
              </div>
            </div>

            <p className="mathemania-text mathemania-past-line">
              Past papers and resources will be made available on the Stamatics
              website ahead of the contest.
            </p>
          </div>

          {/* RIGHT: REGISTRATION FORM */}
          <div className="mathemania-card">
            <h2 className="mathemania-card-title">
              Mathemania Registration Form
            </h2>
            <p className="mathemania-text">
              Group size limit: up to 4 members.
              <br />
              <span className="mathemania-note">
                Team name should contain only Roman characters, digits, spaces,
                and underscores (no emojis or special symbols).
              </span>
            </p>

            <form className="mathemania-form" onSubmit={handleSubmit}>
              {/* TEAM NAME (required) */}
              <div className="mathemania-field">
                <label htmlFor="teamName">
                  Team Name<span className="required-star">*</span>
                </label>
                <input
                  id="teamName"
                  name="teamName"
                  type="text"
                  required
                  pattern="[A-Za-z0-9_ ]+"
                  title="Use letters, numbers, spaces, and underscores only."
                  placeholder="Enter team name"
                />
              </div>

              {/* INSTITUTE (required) */}
              <div className="mathemania-field">
                <label htmlFor="institute">
                  Institute<span className="required-star">*</span>
                </label>
                <input
                  id="institute"
                  name="institute"
                  type="text"
                  required
                  placeholder="Enter institute name"
                />
              </div>

              {/* TEAM LEADER (required) */}
              <div className="mathemania-field">
                <label htmlFor="teamLeader">
                  Team Leader<span className="required-star">*</span>
                </label>
                <input
                  id="teamLeader"
                  name="teamLeader"
                  type="text"
                  required
                  placeholder="Full name of team leader"
                />
              </div>

              {/* EMAIL (required) */}
              <div className="mathemania-field">
                <label htmlFor="leaderEmail">
                  Email<span className="required-star">*</span>
                </label>
                <input
                  id="leaderEmail"
                  name="leaderEmail"
                  type="email"
                  required
                  placeholder="leader@example.com"
                />
              </div>

              {/* CONTACT NUMBER (required) */}
              <div className="mathemania-field">
                <label htmlFor="leaderPhone">
                  Contact Number<span className="required-star">*</span>
                </label>
                <input
                  id="leaderPhone"
                  name="contactNumber"
                  type="tel"
                  required
                  placeholder="10-digit phone number"
                />
              </div>

              {/* TEAM MEMBER 2 */}
              <div className="mathemania-field-group">
                <div className="mathemania-field">
                  <label htmlFor="member2">Team Member 2</label>
                  <input
                    id="member2"
                    name="member2Name"
                    type="text"
                    placeholder="Name (optional)"
                  />
                </div>
                <div className="mathemania-field">
                  <label htmlFor="member2Email">Email</label>
                  <input
                    id="member2Email"
                    name="member2Email"
                    type="email"
                    placeholder="member2@example.com"
                  />
                </div>
              </div>

              {/* TEAM MEMBER 3 */}
              <div className="mathemania-field-group">
                <div className="mathemania-field">
                  <label htmlFor="member3">Team Member 3</label>
                  <input
                    id="member3"
                    name="member3Name"
                    type="text"
                    placeholder="Name (optional)"
                  />
                </div>
                <div className="mathemania-field">
                  <label htmlFor="member3Email">Email</label>
                  <input
                    id="member3Email"
                    name="member3Email"
                    type="email"
                    placeholder="member3@example.com"
                  />
                </div>
              </div>

              {/* TEAM MEMBER 4 */}
              <div className="mathemania-field-group">
                <div className="mathemania-field">
                  <label htmlFor="member4">Team Member 4</label>
                  <input
                    id="member4"
                    name="member4Name"
                    type="text"
                    placeholder="Name (optional)"
                  />
                </div>
                <div className="mathemania-field">
                  <label htmlFor="member4Email">Email</label>
                  <input
                    id="member4Email"
                    name="member4Email"
                    type="email"
                    placeholder="member4@example.com"
                  />
                </div>
              </div>

              <p className="mathemania-text mathemania-footnote">
                Fields marked with <span className="required-star">*</span> are
                compulsory. Group size limit is up to 4 members.
              </p>

              <button
                type="submit"
                className="mathemania-button"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Registration"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mathemania;
