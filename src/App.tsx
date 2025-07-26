import React from 'react';
import {Button, ComboBox, Group, Input, Label, ListBox, ListBoxItem, Popover} from 'react-aria-components';
import type {ListBoxItemProps} from 'react-aria-components';
import {Check, ChevronsUpDown} from 'lucide-react';

const people = [
  { id: 1, name: 'John Doe', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1' },
  { id: 2, name: 'Jane Smith', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1' },
  { id: 3, name: 'Bob Johnson', avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1' },
  { id: 4, name: 'Alice Brown', avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1' },
  { id: 5, name: 'Charlie Wilson', avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1' },
  { id: 6, name: 'Diana Davis', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1' },
];

function ComboBoxExample() {
  return (
    <div className="bg-gradient-to-r from-sky-300 to-cyan-300 p-8 sm:h-[300px] rounded-lg flex justify-center min-h-screen">
      <ComboBox className="group flex flex-col gap-1 w-[200px]">
        <Label className="text-black cursor-default">Assignee</Label>
        <Group className="flex rounded-lg bg-white/90 focus-within:bg-white transition shadow-md ring-1 ring-black/10 focus-visible:ring-2 focus-visible:ring-black">
          <Input className="flex-1 w-full border-none py-2 px-3 leading-5 text-gray-900 bg-transparent outline-none text-base" />
          <Button className="px-3 flex items-center text-gray-700 transition border-0 border-solid border-l border-l-sky-200 bg-transparent rounded-r-lg pressed:bg-sky-100">
            <ChevronsUpDown className="w-4 h-4" />
          </Button>
        </Group>
        <Popover className="max-h-60 w-[--trigger-width] overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out">
          <ListBox className="outline-none p-1" items={people} renderEmptyState={() => (
            <div className="p-2 text-center text-sm text-gray-500">
              No options found
            </div>
          )}>
            {(item) => (
              <UserItem textValue={item.name}>
                <img
                  alt=""
                  src={item.avatar}
                  className="w-6 h-6 rounded-full"
                />
                <span className="truncate">{item.name}</span>
              </UserItem>
            )}
          </ListBox>
        </Popover>
      </ComboBox>
    </div>
  );
}

function UserItem(props: ListBoxItemProps & { children: React.ReactNode }) {
  return (
    <ListBoxItem
      {...props}
      
      className="group flex items-center gap-2 cursor-default select-none py-2 pl-2 pr-4 outline-none rounded-sm text-gray-900 focus:bg-sky-600 focus:text-white"
    >
      {({ isSelected }) => (
        <>
          <span className="flex-1 flex items-center gap-3 truncate font-normal group-selected:font-medium">
            {props.children}
          </span>
          {isSelected &&
            (
              <span className="w-5 flex items-center text-sky-600 group-focus:text-white">
                <Check className="w-4 h-4" />
              </span>
            )}
        </>
      )}
    </ListBoxItem>
  );
}

function App() {
  return (
      <ComboBoxExample />

  );
}

export default App;