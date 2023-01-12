import { BehaviorSubject } from "rxjs"
import getConfig from "next/config"
import Router from "next/router"

import { URL, fetchWrapper } from "../utils"

const baseUrl = `${URL}`
const userSubject = new BehaviorSubject(
  typeof window !== "undefined" && JSON.parse(localStorage.getItem("user"))
)

export const userService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value
  },
  login,
  logout,
  forgotPassword,
  profile,
  getCandidates,
  getCandidateStatus,
  getDashboardProfile,
  getRecruitersProfile,
  getRecruitersInterest,
  getTalentRequest,
  getClientProfile,
  getCandidate,
  getCompany,
  getCompanyOpening,
  getJobOpeningStatus,
  getWorkPlaceType,
  getEmploymentType,
  getLatestActivity,
  getActivityScore,
  getAcceptanceRate,
  getAssessments,
  getAssessmentsInterest,
  getJobInterest,
  getAssessmentDetail,
  createAssessment,
  getJobLevel,
  uploadImg,
  uploadClientImg,
  activateCandidate,
  deactivateCandidate,
  activateClient,
  deactivateClient,
  getPostionmatchStatus,
  updateMatch,
  getOpeningDetails,
  getAdminProfile,
  getCandidateAssessment,
  getAssessmentStatus,
  updateCandidateAssessment,
}

// auth
function login(data) {
  return fetchWrapper
    .post(`${baseUrl}/auth/login/admin/`, data)
    .then((user) => {
      // publish user to subscribers and store in local storage to stay logged in between page refreshes
      userSubject.next(user.data)
      localStorage.setItem("user", JSON.stringify(user.data))
      return user
    })
}

function logout() {
  // remove user from local storage, publish null to user subscribers and redirect to login page
  localStorage.removeItem("user")
  userSubject.next(null)
  Router.push("/login")
}

function forgotPassword(data) {
  return fetchWrapper.postWithoutToken(`${baseUrl}/auth/forgotpassword/`, data)
}

// dashboard
function getDashboardProfile() {
  return fetchWrapper.get(`${baseUrl}/admin/dashboard/profile-counts/`)
}
function getLatestActivity() {
  return fetchWrapper.get(`${baseUrl}/admin/dashboard/latest-activity/?days=30`)
}
function getActivityScore() {
  return fetchWrapper.get(
    `${baseUrl}/admin/dashboard/daily-logged-in-users/?days=30`
  )
}
function getAcceptanceRate() {
  return fetchWrapper.get(
    `${baseUrl}/admin/dashboard/offer-acceptance-rate/?days=30`
  )
}

function profile() {
  return fetchWrapper.get(`${baseUrl}/admin-profiles/`)
}
function getAdminProfile(id) {
  return fetchWrapper.get(`${baseUrl}/admin-profiles/${id}/`)
}
function getCandidates(page) {
  return fetchWrapper.get(
    `${baseUrl}/candidate-profiles/${page ? `?page=${page} ` : `?page=1`}`
  )
}

function get(page) {
  return fetchWrapper.get(
    `${baseUrl}/candidate-profiles/${page ? `?page=${page} ` : `?page=1`}`
  )
}

function getCandidateStatus() {
  return fetchWrapper.get(`${baseUrl}/candidate-statuses/`)
}
function getAssessmentStatus() {
  return fetchWrapper.get(`${baseUrl}/assessment-statuses/
  `)
}
function getPostionmatchStatus() {
  return fetchWrapper.get(`${baseUrl}/position-match-statuses/`)
}

function getRecruitersProfile() {
  return fetchWrapper.get(`${baseUrl}/recruiter-profiles/`)
}

function getRecruitersInterest() {
  return fetchWrapper.get(`${baseUrl}/interests/`)
}

function getTalentRequest(page) {
  return fetchWrapper.get(
    `${baseUrl}/admin/dashboard/talent-request/${
      page ? `?page=${page}` : `?page=1`
    }`
  )
}
function getClientProfile(page) {
  return fetchWrapper.get(
    `${baseUrl}/client-profiles/${page ? `?page=${page} ` : ``}`
  )
}

function getCandidate(id) {
  return fetchWrapper.get(`${baseUrl}/candidate-profiles/${id}/`)
}
function getCandidateAssessment() {
  return fetchWrapper.get(`${baseUrl}/admin/dashboard/candidate-assessments/`)
}

function getCompany(id) {
  return fetchWrapper.get(`${baseUrl}/client-profiles/${id}/`)
}

function getCompanyOpening(id) {
  return fetchWrapper.get(`${baseUrl}/clients/${id}/job-openings/`)
}
function getOpeningDetails(cid, id) {
  return fetchWrapper.get(`${baseUrl}/clients/${cid}/job-openings/${id}/`)
}
function getJobOpeningStatus() {
  return fetchWrapper.get(`${baseUrl}/job-opening-statuses/`)
}
function getWorkPlaceType() {
  return fetchWrapper.get(`${baseUrl}/workplace-types/`)
}
function getEmploymentType() {
  return fetchWrapper.get(`${baseUrl}/employment-types/`)
}

// assesment
function getAssessments() {
  return fetchWrapper.get(`${baseUrl}/assessments/?page=1&limit=12
`)
}
function getAssessmentsInterest() {
  return fetchWrapper.get(`${baseUrl}/assessment-interests/
`)
}
function getAssessmentDetail(id) {
  return fetchWrapper.get(`${baseUrl}/assessments/${id}/
`)
}
function getJobInterest() {
  return fetchWrapper.get(`${baseUrl}/interests/`)
}

function getJobLevel() {
  return fetchWrapper.get(`${baseUrl}/job-levels/`)
}
function createAssessment(data) {
  return fetchWrapper.post(`${baseUrl}/assessments/`, data)
}
function uploadImg(id, data) {
  return fetchWrapper.patch(`${baseUrl}/candidate-profiles/${id}/`, data)
}
function uploadClientImg(id, data) {
  return fetchWrapper.patch(`${baseUrl}/client-profiles/${id}/`, data)
}

function activateCandidate(id) {
  return fetchWrapper.patch(
    `${baseUrl}/admin/candidate-profiles/${id}/activate/`
  )
}

function deactivateCandidate(id) {
  return fetchWrapper.delete(`${baseUrl}/candidate-profiles/${id}/`)
}

function activateClient(id) {
  return fetchWrapper.patch(`${baseUrl}/admin/client-profiles/${id}/activate/`)
}

function deactivateClient(id) {
  return fetchWrapper.delete(`${baseUrl}/client-profiles/${id}/`)
}

function updateMatch(cid, id, data) {
  return fetchWrapper.patch(
    `${baseUrl}/clients/${cid}/position-matches/${id}/`,
    data
  )
}
function updateCandidateAssessment(cid, id, data) {
  return fetchWrapper.patch(
    `${baseUrl}/candidate-profiles/${cid}/candidate-assessments/${id}/`,
    data
  )
}
