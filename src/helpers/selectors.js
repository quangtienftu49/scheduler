const matchIds = (appointments, ids) => {
  const matched = ids.map(id => appointments[id]);
  return matched;
}

function getAppointmentsForDay(state, day) {
  let appointmentArr = [];

  state.days.map((dayObj) => {
    if (dayObj.name === day) {
      dayObj.appointments.forEach(apptId => appointmentArr.push(apptId))
    }

    return appointmentArr;
  })

  return matchIds(state.appointments, appointmentArr);
}

function getInterview(state, interview) {
  if (!interview) {
    return null;
  }

  const interviewerInfo = state.interviewers[interview.interviewer];

  return {
    student: interview.student,
    interviewer: interviewerInfo
  }
}

function getInterviewersForDay(state, day) {
  let interviewersArr = [];

  state.days.map(dayObj => {
    if (dayObj.name === day) {
      dayObj.interviewers.forEach(interviewerId => interviewersArr.push(interviewerId))
    }

    return interviewersArr;
  })
  return matchIds(state.interviewers, interviewersArr);
}

module.exports = { getAppointmentsForDay, getInterview, getInterviewersForDay };