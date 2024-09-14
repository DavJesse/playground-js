async function getJSON(path = '', params = {}) {
    const url = new URL(path);
    const searchParams = new URLSearchParams(params);
    url.search = searchParams.toString();
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const data = await response.json();

    if (data.error) {
        throw new Error(data.error);
    }

    if (data.data) {
        return data.data;
    }
    throw new Error('Unexpected response format');
}