import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const usePermission = permission_value => {
  const [access, setAccess] = useState(false);

  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (auth.user && auth.user.groups.length) {
      auth.user.groups.map(group => {
        group.permissions.map(permission => {
          if (permission.codename === permission_value) {
            setAccess(true);
          }
        });
      });
    } else {
      setAccess(false);
    }
  }, [auth, permission_value]);

  return access;
};

export default usePermission;
