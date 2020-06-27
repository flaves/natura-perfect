exports.createPages = ({ actions: { createRedirect } }) => {
  createRedirect({
    fromPath: '/',
    toPath: '/waiting',
    isPermanent: true,
    force: true,
    redirectInBrowser: true,
  });

  createRedirect({
    fromPath: '/about',
    toPath: '/waiting',
    isPermanent: true,
    force: true,
    redirectInBrowser: true,
  });

  createRedirect({
    fromPath: '/contact',
    toPath: '/waiting',
    isPermanent: true,
    force: true,
    redirectInBrowser: true,
  });

  createRedirect({
    fromPath: '/services',
    toPath: '/waiting',
    isPermanent: true,
    force: true,
    redirectInBrowser: true,
  });
};
