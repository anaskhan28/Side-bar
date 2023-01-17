import useSWR from 'swr';
import axios from 'axios';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}



const fetcher = url => axios.get(url).then(res => res.data)

function Sidebar() {

     const { data, error, isLoading } = useSWR(`http://tinyurl.com/6h6txk4e`, fetcher)
      if (error) return <div>failed to load</div>
      if (isLoading) return <div>loading...</div>

    const items = [
        getItem(data.data[0].category.name, 'sub1', <img className='h-10 w-10' src={data.data[0].category.ui_info.icon}/>, [
        getItem(data.data[0].sub_categories[0].name, 'sub1', null,), getItem(data.data[0].sub_categories[1].name, 'sub2', null,),
        ]),
        getItem(data.data[1].category.name, 'sub2', <img className='h-10 w-10' src={data.data[1].category.ui_info.icon}/>, [
            getItem(data.data[1].sub_categories[0].name, 'sub2', null,),
        ]),
        getItem(data.data[2].category.name, 'sub4',<img className='h-10 w-10' src={data.data[2].category.ui_info.icon}/>, [
            getItem(data.data[2].sub_categories[0].name, 'sub1', null,), getItem(data.data[2].sub_categories[1].name, 'sub2', null,),
        ]),
        getItem(data.data[3].category.name, 'sub5', <img className='h-10 w-10' src={data.data[3].category.ui_info.icon}/>, [
            getItem(data.data[3].sub_categories[0].name, 'sub1', null,), getItem(data.data[3].sub_categories[1].name, 'sub2', null,),
           
          ]),
          getItem(data.data[4].category.name, 'sub6', <img className='h-10 w-10' src={data.data[4].category.ui_info.icon}/>, [
            getItem(data.data[4].sub_categories[0].name, 'sub1', null,), 
          ]),
      ];
    
      
      const onClick = (e) => {
        console.log('click ', e);
      };

  return (
    <Menu className='lg:flex lg:flex-col'
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default Sidebar;