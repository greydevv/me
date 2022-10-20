import * as Realm from "realm-web"

export default async function getAccessToken() {
  const realmApp = new Realm.App(process.env.REALM_APP_ID)
  if (!realmApp.currentUser) {
    await realmApp.logIn(Realm.Credentials.anonymous())
  } else {
    await realmApp.currentUser.refreshCustomData()
  }
  return realmApp.currentUser.accessToken
}
