<template>
  <div>
    <div class="content-header">
      <h1>品牌管理</h1>
    </div>
    <hr/>

    <!-- 表单：查询特定的品牌、公司等等 -->
    <template>
      <el-form :inline="true" :model="toSearchBrand" class="demo-form-inline">
        <el-form-item label="当前状态">
          <!--                <el-input v-model="brand.statu" placeholder="当前状态"></el-input>-->
          <el-select v-model="toSearchBrand.statu" placeholder="当前状态">
            <el-option label="--" :value=-1></el-option>
            <el-option label="启用" :value=1></el-option>
            <el-option label="禁用" :value=0></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="企业名称">
          <el-input v-model="toSearchBrand.companyName" placeholder="企业名称"></el-input>
        </el-form-item>
        <el-form-item label="品牌名称">
          <el-input v-model="toSearchBrand.brandName" placeholder="品牌名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </template>

    <!-- 按钮：批量删除和新增 -->
    <template>
      <el-button type="warning" @click="deleteByArray">批量删除</el-button>
      <el-button type="primary" @click="dialogVisible = true">新增</el-button>
    </template>

    <!-- 新增对话框：添加数据 -->
    <el-dialog
        title="编辑数据"
        :visible.sync="dialogVisible"
        width="35%"
        :before-close="handleClose"> <!-- 点击❌触发事件 -->

      <el-form ref="form" :model="Brand" label-width="80px">
        <el-form-item label="品牌名称">
          <el-input v-model="Brand.brandName" ></el-input>
        </el-form-item>
        <el-form-item label="企业名称">
          <el-input v-model="Brand.companyName"></el-input>
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model="Brand.ordered"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="Brand.description"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch v-model="Brand.statu" value="false" :active-value="1" :inactive-value="0"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addBrand" >提交</el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>

    </el-dialog>


    <!-- 修改对话框 修改数据 -->
    <el-dialog
        title="修改数据"
        :visible.sync="dialogVisibleUpd"
        width="30%"
        :before-close="handleClose">

      <el-form ref="form" :model="UpdBrand" label-width="80px">
        <el-form-item label="品牌名称">
          <el-input v-model="UpdBrand.brandName" ></el-input>
        </el-form-item>
        <el-form-item label="企业名称">
          <el-input v-model="UpdBrand.companyName"></el-input>
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model="UpdBrand.ordered"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="UpdBrand.description"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch v-model="UpdBrand.statu" :active-value="1" :inactive-value="0"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="updateBrand2" >提交</el-button>
          <el-button @click="dialogVisibleUpd = false">取消</el-button>
        </el-form-item>
      </el-form>

    </el-dialog>


    <hr>


    <div v-show="flag == 1" style="color: #dd6161"><b>已为您搜索到{{totalCount}}</b></div>


    <!-- 数据表格：展示数据 -->
    <template>
      <el-table
          :data="tableData"
          style="width: 100%"
          :row-class-name="tableRowClassName"
          @selection-change="handleSelectionChange"> <!-- 复选框选中后触发事件，将数据传递 -->
        <el-table-column
            type="selection">
        </el-table-column>
        <el-table-column
            align="center"
            type="index"
            :index="indexMethod"
            label="序号">
        </el-table-column>
        <el-table-column
            align="center"
            prop="brandName"
            label="品牌名称">
        </el-table-column>
        <el-table-column
            align="center"
            prop="companyName"
            label="企业名称">
        </el-table-column>
        <el-table-column
            align="center"
            prop="ordered"
            label="排序">
        </el-table-column>
        <el-table-column
            align="center"
            prop="description"
            label="品牌介绍">
        </el-table-column>
        <el-table-column
            align="center"
            prop="statu"
            label="状态" >
          <template slot-scope="scope">
            <div v-if="scope.row.statu == 0">禁用</div>
            <div v-else>启用</div>
          </template>
        </el-table-column>
        <el-table-column
            align="center"
            label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="updateBrand(scope.row)">修改</el-button>
            <el-button type="danger" size="small" @click="delBrand(scope.row.brandId)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>

    <!--    分页功能-->
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 25]"
        :page-size="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount">
    </el-pagination>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Brand",
  data() {
    return {
      //对应表格数据
      tableData: [
        {
          brandId:"",
          brandName:"",
          companyName:"",
          ordered:"",
          description:"",
          statu:""
        }
      ],
      // 预搜索，当未点击搜索按钮时不提交搜索表单内容
      toSearchBrand:{
        brandName:undefined,
        companyName:undefined,
        statu:-1
      },
      // 对应搜索表单
      Searchbrand: {
        brandName:undefined,
        companyName:undefined,
        statu:-1
      },
      // 添加品牌数据 数据模型
      Brand:{
        brandId:'',
        brandName:'',
        companyName:'',
        ordered:'',
        description:'',
        statu:''
      },
      //更新数据的id
      UpdBrand:{
        brandId: '',
        brandName: '',
        companyName: '',
        ordered: '',
        description: '',
        statu: ''
      },

      // 对应复选框选中集合数据
      multipleSelection: [],

      // 新增数据对话框 可见标志
      dialogVisible: false,
      dialogVisibleUpd: false,

      // 当前页码
      currentPage: 1,
      // 全部数据个数
      totalCount:100,
      // 每页数据个数
      avgPage:5,

      flag: 0,


    }
  },
  methods: {
    // 异步获取所有数据（刷新页面）
    getAllData(){
      var _this = this;
      if(this.Searchbrand.statu == -1 && (this.Searchbrand.brandName == undefined || this.Searchbrand.brandName == '') &&
          (this.Searchbrand.companyName == undefined || this.Searchbrand.companyName == '') ){
        this.flag = 0;
      }else {
        this.flag = 1;
      }
      $.ajax({
        type:"get",
        url:"http://localhost:8080/ajax/selectBrandByXX?avgPage="+this.avgPage+"&"+"currentPage="+this.currentPage,
        data:this.Searchbrand,
        dataType:"json",
        success: function (data){
          _this.tableData = data.data.records;
          _this.totalCount = data.data.total;
          // 如果当前页码值大于了总页码值，那么重新执行查询操作，使用最大页码值作为当前页码值
          // 解决问题：当最后一页数据仅有一条时，删除后，应该返回前一页（新的最后一页），并且序号也要修改（vue自带的），需要重新设置当前页模型数据
          if (_this.currentPage > _this.totalCount/_this.avgPage){
            _this.currentPage = Math.ceil(_this.totalCount/_this.avgPage);
          }
        }
        // success: data => {                 //使用该中方式的好处是不用在外部定义 _this = this;
        //     this.tableData = data.records;
        //     this.totalCount = data.total;
        //     this
        // }
      })
    },

    // 页面条纹的交替
    // eslint-disable-next-line no-unused-vars
    tableRowClassName({row, rowIndex}) {
      if (rowIndex%4 === 1) {
        return 'warning-row';
      } else if (rowIndex%4 === 3) {
        return 'success-row';
      }
      return '';
    },

    // 表格复选框选中之后的方法
    handleSelectionChange(val) {
      this.multipleSelection = val;
      // console.log(this.multipleSelection);
    },

    // 点击查询按钮后的触发事件
    onSubmit() {
      var _this = this;
      // 将预数据加载到搜索表单中
      for (const Key in this.toSearchBrand) {
        this.Searchbrand[Key] = this.toSearchBrand[Key]
      }
      this.currentPage = 1;
      // console.log(this.Searchbrand);
      // $.ajax({
      //     type:"get",
      //     url:"http://localhost:8080/ajax/selectBrandByXX?avgPage="+this.avgPage+"&"+"currentPage="+this.currentPage,
      //     data: this.Searchbrand,
      //     success:function (result){
      //         _this.tableData = result.records;
      //         _this.totalCount = result.total;
      //     }
      // })
      _this.getAllData();
    },

    // 新增品牌 点击❌触发事件
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(() => {
            done();
          })
          .catch(() => {});
    },

    // 新增品牌 点击提交按钮
    addBrand(){
      let _this = this
      $.ajax({
        type:"post",
        url:"http://localhost:8080/ajax/addBrand",
        data:JSON.stringify(this.Brand),
        contentType: "application/json;charset=utf-8",
        //成功响应的结果
        success:function(data) {
          if(data.flag == true){

            //关闭对话框
            _this.dialogVisible = false;

            //添加成功提示
            _this.$message({
              message: '添加成功',
              type: 'success'
            });

            //添加信息成功
            _this.getAllData();
          }else{
            //添加失败提示
            _this.$message({
              message: data.msg,
              type: 'error'
            });
          }
        }
      })
    },

    // 删除品牌 点击提交按钮
    delBrand(id){
      this.$confirm('确认删除该条数据?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var _this = this;
        $.ajax({
          type:"delete",
          url:"http://localhost:8080/ajax/" + id,
          //成功响应的结果
          success:function(data) {
            if(data.flag == true){  // 如果数据成功删除
              //添加信息成功
              _this.$message({
                type: 'success',
                message: '删除成功!'
              });
              _this.getAllData();  // 重新定向页面
            }else{  // 如果删除失败
              _this.$message({
                type: 'error',
                message: '删除失败!'
              });
            }
          }
        })
      }).catch(() => {  // 用户取消删除
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });

    },
    // 批量删除
    deleteByArray(){
      this.$confirm('确认删除选中数据?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var _this = this;
        let ids = [];  //用来存储id
        let multis = this.multipleSelection;
        if(multis.length == 0){   // 检测是否有数据被选中
          this.$message({
            type: 'warning',
            message: '你未选中删除数据！'
          });
          return;
        }
        for(let i = 0; i < multis.length; i++){
          let multi = multis[i];
          ids.push(multi['brandId'])
        }
        $.ajax({
          type:"delete",
          url:"http://localhost:8080/ajax",
          data: JSON.stringify(ids),
          contentType: "application/json;charset=utf-8",
          //成功响应的结果
          success:function(data) {
            if(data.flag == true){  // 如果数据成功删除
              //添加信息成功
              _this.$message({
                type: 'success',
                message: '删除成功!'
              });
              _this.getAllData();  // 重新定向页面
            }else{  // 如果删除失败
              _this.$message({
                type: 'success',
                message: '删除失败!'
              });
            }
          }
        })
      }).catch(() => {  // 用户取消删除
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    // 修改数据 函数
    updateBrand(row){
      // 将表格里的数据添加至修改表单中，展现给用户，方便用户修改
      for (const rowKey in row) {
        this.UpdBrand[rowKey] = row[rowKey]
      }
      // 弹出修改表单
      this.dialogVisibleUpd = true;
    },
    updateBrand2(){
      this.$confirm('确认修改该条数据?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var _this = this;
        $.ajax({
          type:"put",
          url:"http://localhost:8080/ajax",
          data:JSON.stringify(this.UpdBrand),
          contentType: "application/json;charset=utf-8",
          //成功响应的结果
          success:function(data) {
            if(data.flag == true){  // 如果数据成功修改
              //添加信息成功
              _this.$message({
                type: 'success',
                message: '修改成功!'
              });
              _this.dialogVisibleUpd = false
              _this.getAllData();  // 重新定向页面
            }else{  // 如果删除失败
              _this.$message({
                type: 'success',
                message: '修改失败!'
              });
            }
          }
        })
      }).catch(() => {  // 用户取消修改
        this.$message({
          type: 'info',
          message: '已取消修改'
        });
      });
    },
    //分页相关的函数
    // 当每页页数发生变化时
    handleSizeChange(val) {
      this.avgPage = val;
      this.getAllData();
      // let _this = this
      // $.ajax({
      //     type:"get",
      //     url:"http://localhost:8080/ajax/selectByPage",
      //     data:{"avgPage":this.avgPage,"currentPage":this.currentPage},
      //     //成功响应的结果
      //     success:function(result) {
      //         _this.tableData = result.records;
      //         _this.totalCount = result.total;
      //     }
      // })
    },
    // 当页码发生变化时
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getAllData();
      // let _this = this
      // $.ajax({
      //     type:"get",
      //     url:"http://localhost:8080/ajax/selectByPage",
      //     data:{"avgPage":this.avgPage,"currentPage":this.currentPage},
      //     //成功响应的结果
      //     success:function(result) {
      //         _this.tableData = result.records;
      //         _this.totalCount = result.total;
      //     }
      // })
    },
    indexMethod(index) {
      return index + (this.currentPage- 1) * this.avgPage + 1; //currentPage当前页，avgPage每页显示数量
    },
  },
  mounted(){
    // eslint-disable-next-line no-unused-vars
    var _this = this;
    this.getAllData();
    // $.ajax({
    //     type:"get",
    //     url:"http://localhost:8080/ajax/selectByPage",
    //     data:{"avgPage":this.avgPage,"currentPage":this.currentPage},
    //     dataType:"json",
    //     success: function (data){
    //         _this.tableData = data.records;
    //         _this.totalCount = data.total;
    //         // for(let i = 0; i < _this.tableData.length; i++){
    //         //     let data = _this.tableData[i];
    //         //     for (const dataKey in data) {
    //         //         document.write(dataKey + "              ");
    //         //         document.write(data[dataKey]+"          ");
    //         //     }
    //         //     document.write("<br/>");
    //         // }
    //     }
    // })

  }
}
</script>

<style scoped>

</style>