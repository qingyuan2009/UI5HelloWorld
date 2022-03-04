# UI5HelloWorld

Create new project in webIDE， export the application 

Install UI5 tooling: 

    https://help.sap.com/viewer/disclaimer-for-links?q=https://sap.github.io/ui5-tooling/

    > cd C:\Users\I035299\Documents\GitHub\UI5HelloWorld
    > npm install
    > ui5 serve

# workthrough

## bootstrap

    <script id="sap-ui-bootstrap" 
		src="https://sapui5.hana.ondemand.com/resources/sap-ui-core.js"
		data-sap-ui-theme="sap_fiori_3"
		data-sap-ui-libs="sap.m"
		data-sap-ui-resourceroots='{"rui.com.UI5HelloWorld": "./"}'
		data-sap-ui-compatVersion="edge"
		data-sap-ui-onInit="module:rui/com/UI5HelloWorld/index"
		data-sap-ui-async="true"
		data-sap-ui-frameOptions="trusted"
		data-sap-ui-resourceroots='{
			"rui.com.UI5HelloWorld": "./"
		}'>
	</script>

    *   src: where to find the SAPUI5 core library, and load additional resource, e.g.:data-sap-ui-libs 
    *   data-sap-ui-resourceroot : We tell SAPUI5 core that resources in the rui.com.UI5HelloWorld namespace are located in the same  folder as index.html