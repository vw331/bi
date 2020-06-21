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
      name: '华南',
      key: '0-0',
      child: [
        {
          name: '广东',
          key: '0-0-0',
          child: [
            { name: '广州', key: '0-0-0-0' },
            { name: '深圳', key: '0-0-0-1' },
          ],
        },
        {
          name: '福建',
          key: '0-0-1',
          child: [{ key: '0-0-1-0', name: '厦门' }],
        },
      ],
    },
  ];

  export default {
    name: 'ProjectTree',
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