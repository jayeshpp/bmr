import React, {
  Children,
  cloneElement,
  ReactElement,
  useEffect,
  useMemo,
  useState,
} from "react";

interface ITabProps {
  onChange?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => void;
  activeTab?: number;
  children: ReactElement[];
}

interface ITabItem {
  id: number;
  title: string;
  disabled?: boolean;
  children?: ReactElement;
}

export const Tab = ({ onChange, activeTab = 0, children }: ITabProps) => {
  const [tabs, setTabs] = useState<ITabItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(activeTab);

  const elements = useMemo(
    () => Children.toArray(children).filter((el) => React.isValidElement(el)),
    [children]
  ) as ReactElement[];

  const Content = cloneElement(elements[activeIndex], { title: "" });

  const handleTabChange = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setActiveIndex(index);
    onChange?.(event, index);
  };

  useEffect(() => {
    if (!isNaN(activeTab)) {
      setActiveIndex(activeTab);
    }
  }, [activeTab]);

  useEffect(() => {
    const tabs = elements.map((ele, i) => {
      if (ele.props.active && typeof ele.props.active === "boolean") {
        setActiveIndex(i);
      }
      return {
        id: i,
        title: ele.props.title,
        disabled: ele.props.disabled,
      };
    });
    setTabs(tabs);
  }, [elements]);

  return (
    <>
      <div className="flex gap-4 border-b border-gray-200">
        {tabs.length > 0 &&
          tabs.map((tab, i) => (
            <div
              key={tab.id}
              className="cursor-pointer px-4 py-2 relative text-gray-800 hover:bg-slate-50"
              onClick={(event) => !tab.disabled && handleTabChange(event, i)}
            >
              {activeIndex === i && (
                <span className="absolute bottom-0 block h-[2px] bg-slate-700 w-full left-0" />
              )}
              {tab.title}
            </div>
          ))}
      </div>
      <div className="h-full">{Content}</div>
    </>
  );
};

export const TabItem = ({ children }:ITabItem) => {
  return <div className="h-full">{children}</div>;
};
