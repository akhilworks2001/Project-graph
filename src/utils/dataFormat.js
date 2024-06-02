export const getAlertsPerSignature = (data) => {
  const counts = {};
  data.forEach((entry) => {
    if (entry.event_type === 'alert' && entry.alert) {
      const { signature } = entry.alert;
      counts[signature] = (counts[signature] || 0) + 1;
    }
  });
  return Object.keys(counts).map((signature) => ({
    signature,
    count: counts[signature],
  }));
};

export const getAlertsPerCategory = (data) => {
  const counts = {};
  data.forEach((entry) => {
    if (entry.event_type === 'alert' && entry.alert) {
      const { category } = entry.alert;
      counts[category] = (counts[category] || 0) + 1;
    }
  });
  return Object.keys(counts).map((category) => ({
    category,
    count: counts[category],
  }));
};

export const getAlertsOverTime = (data) => {
  const counts = {};
  data.forEach((entry) => {
    if (entry.event_type === 'alert' && entry.alert) {
      const date = new Date(entry.timestamp).toLocaleDateString();
      counts[date] = (counts[date] || 0) + 1;
    }
  });
  return Object.keys(counts).map((date) => ({
    date,
    count: counts[date],
  }));
};

export const getSSHClientSoftwareVersions = (data) => {
  const counts = {};
  data.forEach((entry) => {
    if (entry.event_type === 'ssh' && entry.ssh && entry.ssh.client) {
      const version = entry.ssh.client.software_version;
      counts[version] = (counts[version] || 0) + 1;
    }
  });
  return Object.keys(counts).map((version) => ({
    version,
    count: counts[version],
  }));
};

export const getSSHServerSoftwareVersions = (data) => {
  const counts = {};
  data.forEach((entry) => {
    if (entry.event_type === 'ssh' && entry.ssh && entry.ssh.server) {
      const version = entry.ssh.server.software_version;
      counts[version] = (counts[version] || 0) + 1;
    }
  });
  return Object.keys(counts).map((version) => ({
    version,
    count: counts[version],
  }));
};