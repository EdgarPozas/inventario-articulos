package com.edgarpozas.inventario_objetos.views.components

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.ImageButton
import android.widget.ImageView
import android.widget.TextView
import com.edgarpozas.inventario_objetos.R
import com.edgarpozas.inventario_objetos.models.Objects
import com.edgarpozas.inventario_objetos.models.User
import com.edgarpozas.inventario_objetos.views.ObjectsEdit
import com.edgarpozas.inventario_objetos.views.ObjectsIndividual
import com.edgarpozas.inventario_objetos.views.People
import com.edgarpozas.inventario_objetos.views.Similar

class SimilarListAdapter(
        var similar:Similar,
        var objects:ArrayList<Objects>,
    ): BaseAdapter() {

    override fun getCount(): Int {
        return objects.count()
    }

    override fun getItem(position: Int): Any {
        return objects[position]
    }

    override fun getItemId(position: Int): Long {
        return 0
    }

    override fun getView(position: Int, convertView: View?, parent: ViewGroup?): View {
        val layoutInflater:LayoutInflater= LayoutInflater.from(similar.requireContext())
        val v=layoutInflater.inflate(R.layout.similar_list_item,null)

        val object_=objects[position]

        v.findViewById<TextView>(R.id.name).text = object_.name

        //v.findViewById<ImageView>(R.id.imageView).text = object_

        return v
    }
}