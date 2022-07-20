import frappe

@frappe.whitelist()
def get_library_transaction_count():
    # L=[]
    # member = frappe.db.get_list('Library Member', pluck='name')
    # for m in member:
    #     count = frappe.db.count('Library Transaction', {'library_member': m})
    #     L.append({m: count})
    
    # return L
        
    return frappe.db.sql("""select library_member, count(*) as count from `tabLibrary Transaction` group by library_member""",as_dict=1)
    
@frappe.whitelist()

def get_library_member_detail_by_library_transcation():
    if frappe.has_permission('Library Transaction'):
        return frappe.db.sql("""SELECT t1.article,
        t1.type,
        t2.phone,
        t2.email_address,
        t2.full_name 
        FROM `tabLibrary Transaction` AS t1
        LEFT JOIN `tabLibrary Member` AS t2 ON t1.library_member = t2.name""" ,as_dict=1)
        
    else:
        return frappe.throw("You are not allowed to access this page")