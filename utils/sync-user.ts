export function createSyncUser(
  apiCall: (endpoint: string, options?: RequestInit) => Promise<any>
) {
  return async function syncUser(user: any) {
    console.log(user);
    try {
      const userData = {
        id: user.id,
        email: user.emailAddresses[0]?.emailAddress,
        firstName: user.firstName,
        lastName: user.lastName,
        imageUrl: user.imageUrl,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };

      await apiCall("/users/sync", {
        method: "POST",
        body: JSON.stringify(userData),
      });
    } catch (error) {
      throw error;
    }
  };
}
