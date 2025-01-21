// export const supabaseUrl = 'https://upzmdefamemnafrcuziq.supabase.co';
//     export const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwem1kZWZhbWVtbmFmcmN1emlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3NTc2NDUsImV4cCI6MjA1MjMzMzY0NX0.OsAfZmS1EYmrA8MCcnhcXH2nTku__VlN38yecF6JMlY';

//     export const fetchSupabase = async (endpoint, method = 'GET', body = null) => {
//       const response = await fetch(`${supabaseUrl}/rest/v1/${endpoint}`, {
//         method,
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${supabaseKey}`,
//           'apikey': supabaseKey,
//         },
//         body: body ? JSON.stringify(body) : null,
//       });
//       return response.json();
//     };


export const supabaseUrl = 'https://upzmdefamemnafrcuziq.supabase.co';
export const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwem1kZWZhbWVtbmFmcmN1emlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3NTc2NDUsImV4cCI6MjA1MjMzMzY0NX0.OsAfZmS1EYmrA8MCcnhcXH2nTku__VlN38yecF6JMlY';

export const fetchSupabase = async (endpoint, method = 'GET', body = null) => {
  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${supabaseKey}`,
        apikey: supabaseKey,
      },
      body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error(`Error in fetchSupabase (${method} ${endpoint}):`, errorData);
      return errorData;
    }

    return await response.json();
  } catch (error) {
    console.error('FetchSupabase encountered an error:', error);
    return null;
  }
};
