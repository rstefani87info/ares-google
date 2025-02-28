/** 
* @author Roberto Stefani 
**/ 
 
export class ServiceAccount {
  constructor( aReS, type,
    project_id,
    private_key_id,
    private_key,
    client_email,
    client_id,
    auth_uri,
    token_uri,
    auth_provider_x509_cert_url,
    client_x509_cert_url,
    universe_domain) {
    
    Object.assign(this, {
      aReS,
      type,
      project_id,
      private_key_id,
      private_key,
      client_email,
      client_id,
      auth_uri,
      token_uri,
      auth_provider_x509_cert_url,
      client_x509_cert_url,
      universe_domain,
    });
  }
  async getServiceAccountAccessToken( scopes, tokenExpiration=3600) {
    const now = Math.floor(Date.now() / 1000);
    const payload = {
      iss: this.client_email,
      scope: scopes.join(' '),
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600, // Token valido per 1 ora
      iat: now,
    };
    const signedJwt = jwt.sign(payload, this.private_key, { algorithm: 'RS256' });

    try {
      const response = await axios.post('https://oauth2.googleapis.com/token', {
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: signedJwt,
      });
      return response.data.access_token;
    } catch (error) {
      console.error('Error retrieving access token:', error);
      throw error;
    }
  }

  async  makeServiceAccountAuthenticatedRequest(url, scopes) {
    const accessToken = await getServiceAccountAccessToken( scopes);

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error making authenticated request:', error);
      throw error;
    }
  }
}
