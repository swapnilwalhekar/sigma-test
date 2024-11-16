exports.checkPermission = (requiredPermission) => {
  return (req, res, next) => {
    const userRole = req.user.role;

    if (!userRole.permissions.includes(requiredPermission)) {
      return res.status(403).json({ message: "Permission denied" });
    }

    next();
  };
};
