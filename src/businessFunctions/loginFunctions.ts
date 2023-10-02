export const fillAndSubmitLogin = async (page, credentials) => {
    await page.getByLabel('username').fill(credentials.username)
    await page.getByLabel('password').fill(credentials.password)
    await page.getByRole('button').click()
}
