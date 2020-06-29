<template>
  <div>
    <a-input-search style="margin-bottom: 8px" placeholder="查询地区" @change="onChange" />
    <a-tree
      :tree-data="treeData"
      :default-expanded-keys="['0-0-0', '0-0-1']"
      :default-selected-keys="['0-0-0', '0-0-1']"
      :default-checked-keys="['0-0-0', '0-0-1']"
      :replace-fields="replaceFields"
      @select="onSelect"
    />
  </div>
</template>

<script>

  const treeData = [
    {
      name: '楼宇自控',
      key: '0-0',
      child: [
        {
          name: '暖通空调',
          key: '0-0-0',
          child: [
            { name: '冷暖系统', key: '0-0-0-0' },
            { name: '电力系统', key: '0-0-0-1' },
          ],
        },
        {
          name: '综合安防',
          key: '0-0-2',
          child: [
            { name: '综合安防01', key: '0-1-0-0' },
            { name: '综合安防02', key: '0-2-0-1' },
            { name: '综合安防03', key: '0-3-0-1' }
          ],
        },
        {
          name: '设备维护',
          key: '0-0-1',
          child: [
            { key: '0-0-1-0', name: '设备维护01' },
            { key: '0-0-2-0', name: '设备维护02' },
            { key: '0-0-3-0', name: '设备维护03' },
            { key: '0-0-4-0', name: '设备维护04' }
          ],
        },
      ],
    },
  ];

  export default {
    name: 'DeviceTree',
    props: {
      msg: String
    },
    data(){
      return {
        treeData,
        replaceFields: {
          children: 'child',
          title: 'name',
        },
      }
    },
    methods: {
      onChange() {
        console.log(arguments)
      },
      onSelect(selectedKeys, info) {
        console.log('selected', selectedKeys, info);
      },
      onCheck(checkedKeys, info) {
        console.log('onCheck', checkedKeys, info);
      },
    }
  } 
</script>

<style scoped>

</style>