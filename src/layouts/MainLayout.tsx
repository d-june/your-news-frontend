import { FC, JSXElementConstructor, ReactElement } from "react";
import clsx from "clsx";
import styles from "./MainLayout.module.scss";
import LeftMenu from "@/components/LeftMenu/LeftMenu";
import { SideComments } from "@/components/SideComments/SideComments";
interface MainLayoutProps {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  hideComments?: boolean;
  hideMenu?: boolean;
  contentFullWidth?: boolean;
  className?: string;
}
const MainLayout: FC<MainLayoutProps> = ({
  children,
  contentFullWidth,
  hideComments,
  hideMenu,
  className,
}) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      {!hideMenu && (
        <div className="leftSide">
          <LeftMenu />
        </div>
      )}

      <div className={clsx("content", { "content--full": contentFullWidth })}>
        {children}
      </div>
      {!hideComments && (
        <div className={styles.rightSide}>
          <SideComments />
        </div>
      )}
    </div>
  );
};

export default MainLayout;
