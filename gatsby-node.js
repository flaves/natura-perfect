exports.createPages = ({ actions: { createRedirect } }) => {
  if (process.env.NODE_ENV !== `development`) {
    createRedirect({
      fromPath: '/',
      toPath: '/waiting',
      isPermanent: true,
    });

    createRedirect({
      fromPath: '/about',
      toPath: '/waiting',
      isPermanent: true,
    });

    createRedirect({
      fromPath: '/contact',
      toPath: '/waiting',
      isPermanent: true,
    });

    createRedirect({
      fromPath: '/services',
      toPath: '/waiting',
      isPermanent: true,
    });
  }
};
